import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';
import Carousel from './Carousel';
import ReserveComp from './ReserveComp';
import { API } from '../../config';

function Detail() {
  const location = useLocation();
  const [formValues, setFormValues] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(`${API.DETAIL}/${location.state.id}`);
        setFormValues(result.data.results[0]);
      } catch (error) {
        console.log('trasnferError: ', error);
      }
    };
    getData();
  }, []);

  return (
    <BodyWrap>
      <LayoutDetail>
        <div>
          <RoomTitle>TRYGROUND-스터디룸</RoomTitle>
          <RoomSubTitle>
            당신만의 공간으로 새로운 도전을 시작하세요
          </RoomSubTitle>
        </div>
        <BodyContainer>
          <div>
            <ReservePopContainer>
              <ReserveComp formValues={formValues} />
            </ReservePopContainer>
            <ImgContainer>
              <Carousel images={formValues.image} />
            </ImgContainer>
            <BodySubTitle>
              당신만의 공간으로 새로운 도전을 시작하세요
            </BodySubTitle>
            <p></p>
          </div>
        </BodyContainer>
      </LayoutDetail>
    </BodyWrap>
  );
}

export default Detail;

const BodyWrap = styled.div`
  height: 2000px;
  background-color: #f6f6f6;
`;

const LayoutDetail = styled.div`
  width: 1158px;
  margin: 70px auto;
  padding-top: 50px;
`;

const RoomTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
`;

const RoomSubTitle = styled.p`
  margin-top: 17px;
  padding-bottom: 22px;
  color: #656565;
  font-size: 1.5rem;
  font-weight: 100;
`;

const BodyContainer = styled.section`
  position: relative;
  display: flex;
  margin-top: 39px;
  padding-right: 395px;
`;

const ReservePopContainer = styled.div`
  position: absolute;
  right: 0;
`;

const ImgContainer = styled.div`
  width: 773px;
  height: 580px;
`;

const BodySubTitle = styled.p`
  margin-top: 50px;
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 100;
`;
