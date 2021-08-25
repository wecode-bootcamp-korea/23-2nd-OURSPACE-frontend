import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Result from './Result';
import Filters from './Filters';
import ListContents from './ListContents';
import { API } from '../../config';

function List() {
  const history = useHistory();
  const location = useLocation();
  const [productList, setProductList] = useState([]);
  const [item, setItem] = useState({
    items: 10,
    preItems: 0,
  });
  const [queryState, setQueryState] = useState({});
  const [areaData, setareaDate] = useState([]);
  const [areaSelect, setAreaSelect] = useState('');

  const getCalenderValue = dateStr => {
    inputQuery({ date: dateStr });
  };

  const parseQuery = queryObject => {
    const queryStrKeys = Object.entries(queryObject);
    const queryStr = queryStrKeys
      .map(item => item.join('=').replace(/,/g, '&' + item[0] + '='))
      .join('&');
    return queryStr;
  };

  const inputQuery = queryObject => {
    const objQuery = { ...queryState, ...queryObject };
    setQueryState(objQuery);
    setProductList([]);
    setItem({
      items: 10,
      preItems: 0,
    });
    history.push({
      pathname: `/list?category=${location.state.id}&${parseQuery(objQuery)}`,
    });
  };

  const handlerDistrict = (value, areaName) => {
    setAreaSelect(areaName);
    inputQuery(value);
  };

  const getArea = async () => {
    try {
      const response = await axios.get(`${API.DISTRICT}`);
      const district = response.data.RESULT;
      setareaDate(prev => ({
        ...prev,
        district,
      }));
    } catch (e) {
      console.error(e);
    }
  };

  // axios.create
  const getData = async value => {
    try {
      const response = await axios.get(
        `${API.SPACE}?category=${location.state.id}&${parseQuery(value)}`
      );
      const result = response.data.RESULT.slice(item.preItems, item.items);
      setProductList(prev => [...prev, ...result]);
      getArea();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, []);

  useEffect(() => {
    getData(queryState);
  }, [item.items, item.preItems, queryState]);

  const infiniteScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setItem(prev => {
        return { ...prev, preItems: prev.items, items: prev.items + 10 };
      });
    }
  };

  const [personCount, setPersonCount] = useState(0);

  const increasePerson = () => {
    setPersonCount(prev => prev + 1);
  };

  const onDecreasePerson = () => {
    setPersonCount(prev => prev - 1);
  };

  const onReset = () => {
    setPersonCount(1);
  };

  return (
    <ListContent>
      <Result categoryText={location.state.categoryText} />
      <Filters
        personCount={personCount}
        increasePerson={increasePerson}
        onDecreasePerson={onDecreasePerson}
        onReset={onReset}
        inputQuery={inputQuery}
        setareaDate={setareaDate}
        areaData={areaData}
        areaSelect={areaSelect}
        handlerDistrict={handlerDistrict}
        transferValue={getCalenderValue}
        productList={productList}
        queryState={queryState}
      />
      <ListContents productList={productList} inputQuery={inputQuery} />
    </ListContent>
  );
}

export default List;

const ListContent = styled.div`
  padding-top: 50px;
`;
