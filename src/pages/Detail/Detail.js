import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from './Carousel';

function Detail() {
  return (
    <DetailBody>
      <LayoutDetail>
        <div>
          <RoomTitle>TRYGROUND-스터디룸,클래스</RoomTitle>
          <RoomSubTitle>
            당신만의 공간으로 새로운 도전을 시작하세요
          </RoomSubTitle>
        </div>
        <BodyContainer>
          <div>
            <ReservePopContainer>
              reserve 컴포넌트가 들어갈 자리
            </ReservePopContainer>
            <ImgContainer>
              <Carousel />
            </ImgContainer>
            <BodySubTitle>
              당신만의 공간으로 새로운 도전을 시작하세요
            </BodySubTitle>
            <p>리뷰 컴포넌트 들어갈 자리</p>
          </div>
        </BodyContainer>
      </LayoutDetail>
    </DetailBody>
  );
}

export default Detail;

const DetailBody = styled.div`
  background-color: #f6f6f6;
`;

const LayoutDetail = styled.div`
  width: 1100px; // 나중에 삭제하기
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
  border: 1px solid black;
`;

const ImgContainer = styled.div`
  width: 640px;
`;

const BodySubTitle = styled.p`
  margin-top: 50px;
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 100;
`;
