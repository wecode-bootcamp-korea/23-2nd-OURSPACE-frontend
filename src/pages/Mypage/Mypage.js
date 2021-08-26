import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReservationCard from './ReservationCard';
import { API } from '../../config';

function Mypage() {
  const [reservationState, setreservationState] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${API.MYORDER}`, {
        headers: {
          Authorization: localStorage.getItem('login_kakao_token'),
        },
      });
      setreservationState(response.data.results);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MyPageWrap>
      <MyPageTitle>예약정보</MyPageTitle>
      <ul>
        {reservationState.map(reservationData => {
          return (
            <ReservationCard
              reservationData={reservationData}
              key={reservationData.order_id}
            />
          );
        })}
      </ul>
    </MyPageWrap>
  );
}

export default Mypage;

const MyPageWrap = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding-top: 120px;
`;

const MyPageTitle = styled.h3`
  margin-bottom: 55px;
  color: #333;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4em;
  letter-spacing: 0.05em;
`;
