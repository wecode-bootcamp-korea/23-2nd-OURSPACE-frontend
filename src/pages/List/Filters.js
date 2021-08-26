import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CalenderComp from '../Detail/CalenderComp';
import MapList from './MapList';

function Filters({
  personCount,
  increasePerson,
  onDecreasePerson,
  onReset,
  inputQuery,
  areaData,
  areaSelect,
  handlerDistrict,
  transferValue,
  productList,
  queryState,
}) {
  const [modal, setModal] = useState({
    area: false,
    person: false,
    date: false,
    map: false,
  });

  const openModal = e => {
    const { value } = e.target;
    setModal({
      ...modal,
      [value]: !modal[value],
    });
  };

  return (
    <FilterContents>
      <FilterBoxWidth>
        <Filter>
          <FilterWrap>
            <FilterBtn value="area" onClick={openModal}>
              지역 <span>{areaSelect}</span>
            </FilterBtn>
            {modal.area && (
              <FilterBox>
                <AreaFilter>
                  {areaData.district.map(area => {
                    return (
                      <Area key={area.id}>
                        <button
                          value={area.name}
                          onClick={() =>
                            handlerDistrict({ district: area.id }, area.name)
                          }
                        >
                          {area.name}
                        </button>
                      </Area>
                    );
                  })}
                </AreaFilter>
              </FilterBox>
            )}
          </FilterWrap>
          <FilterWrap>
            <FilterBtn value="person" onClick={openModal}>
              인원 {personCount} 명
            </FilterBtn>
            {modal.person && (
              <FilterBox>
                <div className="PersonFilter">
                  <PersonCounter>
                    <h3>인원</h3>
                    <Person>
                      <p>{personCount}</p>
                      <PersonButton onClick={onDecreasePerson}>-</PersonButton>
                      <PersonButton onClick={increasePerson} increase>
                        +
                      </PersonButton>
                    </Person>
                  </PersonCounter>
                  <ButtonsWrap>
                    <ButtonReset onClick={onReset}>초기화</ButtonReset>
                    <ButtonSearch
                      onClick={() => inputQuery({ count: personCount })}
                    >
                      인원수 적용하기
                    </ButtonSearch>
                  </ButtonsWrap>
                </div>
              </FilterBox>
            )}
          </FilterWrap>
          <FilterWrap>
            <FilterBtn value="date" onClick={openModal}>
              날짜
            </FilterBtn>
            {modal.date && (
              <FilterBox>
                <CalenderCompBox>
                  <CalenderComp transferValue={transferValue} />
                </CalenderCompBox>
              </FilterBox>
            )}
          </FilterWrap>
        </Filter>
      </FilterBoxWidth>
      <MapFilter value="map" onClick={openModal}>
        지도
      </MapFilter>
      {modal.map && (
        <MapContent>
          <MapTitle>
            <h3>보컬연습실</h3>
            <MapClose value="map" onClick={openModal}>
              닫기버튼
            </MapClose>
          </MapTitle>
          <MapList
            productList={productList}
            queryState={queryState}
            areaData={areaData}
          />
        </MapContent>
      )}
    </FilterContents>
  );
}

export default Filters;

const FilterContents = styled.div`
  position: relative;
  max-width: 1160px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const FilterBoxWidth = styled.div`
  max-width: calc(100% - 100px);
`;

const Filter = styled.div`
  display: flex;
  margin: 0 -10px;
`;

const FilterWrap = styled.div`
  position: relative;
  width: 33.33333%;
  border-radius: 5px;
  padding: 0 10px;
`;

const FilterBtn = styled.button`
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 15px;
  text-align: left;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: transparent;
  font-size: 18px;
  line-height: 1.3em;
  letter-spacing: -0.02em;
  cursor: pointer;

  &:before {
    content: '+';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    display: block;
    font-size: 18px;
    color: #704de4;
  }

  span {
    color: #704de4;
    font-size: 14px;
    font-weight: 500;
  }
`;

const FilterBox = styled.div`
  position: absolute;
  top: 41px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  width: calc(100% - 20px);
  background: #fff;
  border: 1px solid #ddd;
`;

const AreaFilter = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Area = styled.li`
  width: 50%;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  &:nth-child(even) {
    border-right: 0;
  }

  &:hover {
    background: #f5f5f5;
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    border: 0;
    background-color: transparent;
    color: #333;
    font-size: 15px;
    text-align: left;
    text-decoration: none;
    line-height: 1.3em;
    letter-spacing: 0.02em;
  }
`;

const PersonCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const Person = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border: 1px solid #ddd;

  p {
    padding: 7px 0;
  }
`;

const PersonButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 30px;
  height: 30px;
  border: 0;
  border-right: 1px solid #ddd;

  ${props =>
    props.increase &&
    css`
      border-right: none;
      border-left: 1px solid #ddd;
      right: 0;
      left: auto;
    `}

  background: transparent;
`;

const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonReset = styled.button`
  display: block;
  width: 40%;
  padding: 12px 0;
  color: #333;
  background: #ffd014;
  border: 0;
  text-align: center;
  font-size: 15px;
`;

const ButtonSearch = styled.button`
  display: block;
  width: 60%;
  padding: 12px 0;
  color: #fff;
  background: #704de4;
  border: 0;
  text-align: center;
  font-size: 15px;
`;

const CalenderCompBox = styled.div`
  padding: 15px;
`;

const MapFilter = styled.button`
  position: absolute;
  top: 2px;
  right: 0;
  display: block;
  width: 90px;
  padding: 8px 0 8px 10px;
  color: #333;
  background-color: transparent;
  border: 2px solid #6d3afb;
  border-radius: 30px;
  font-size: 17px;
  line-height: 1.3em;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 12px;
    width: 12px;
    height: 15px;
    display: block;
    margin-top: -7px;
    background-image: url('/images/location.png');
    background-size: 100% 100%;
  }
`;

const MapContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: #fff;
`;

const MapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #6d3afb;
  overflow: hidden;

  h3 {
    color: #fff;
    font-size: 20px;
  }
`;

const MapClose = styled.button`
  position: relative;
  width: 35px;
  height: 35px;
  background: transparent;
  border: 0;
  text-indent: -999em;

  &:after {
    content: 'X';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #fff;
    text-indent: 0;
    font-size: 30px;
    line-height: 1.2em;
  }
`;
