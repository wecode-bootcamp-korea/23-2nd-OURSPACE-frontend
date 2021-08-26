import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function ReservationCard({ reservationData }) {
  const {
    title,
    sub_title,
    address,
    image,
    price,
    date,
    option,
    is_expired,
    space_id,
  } = reservationData;
  const history = useHistory();
  const goToDetail = () => {
    history.push(`/detail/${space_id}`);
  };

  return (
    <li>
      <ReservationLink IsExpired={is_expired} onClick={goToDetail}>
        <ReservationInfo>
          <Img alt={title} src={image}></Img>
          <Info>
            <Tilte>{title}</Tilte>
            <SubTitle>{sub_title}</SubTitle>
            <Address>주소 : {address}</Address>
          </Info>
        </ReservationInfo>
        <ReservationPriceDayOption>
          <Price>
            <span>결제 금액</span> : {Number(price).toLocaleString()}원
          </Price>
          <Day>
            <span>예약 날짜</span> : {date}
          </Day>
          <Option>
            <span>예약 옵션</span> : {option}
          </Option>
        </ReservationPriceDayOption>
      </ReservationLink>
    </li>
  );
}

export default ReservationCard;

const ReservationLink = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${props => (props.IsExpired ? 1 : -1)};
    display: block;
    background: ${props => (props.IsExpired ? 'rgba(0,0,0,0.07)' : '#fff')};
  }
`;

const ReservationInfo = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 300px);
`;

const Img = styled.img`
  width: 100px;
  height: 80px;
`;

const Info = styled.div`
  padding-left: 15px;
  width: calc(100% - 100px);
`;

const Tilte = styled.h4`
  margin-bottom: 8px;
  color: #333;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4em;
  letter-spacing: 0.01em;
`;

const SubTitle = styled.p`
  margin-bottom: 15px;
  color: #222;
  font-size: 15px;
  line-height: 1.5em;
`;

const Address = styled.p`
  color: #5d5d5d;
  font-size: 16px;
  line-height: 1.3em;
  letter-spacing: 0.01em;
`;

const ReservationPriceDayOption = styled.div`
  width: 275px;
`;

const Price = styled.p`
  margin-bottom: 8px;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5em;

  span {
    color: #6d3afb;
    font-weight: 500;
  }
`;

const Day = styled.p`
  margin-bottom: 8px;
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3em;

  span {
    color: #6d3afb;
    font-weight: 500;
  }
`;

const Option = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3em;

  span {
    color: #6d3afb;
    font-weight: 500;
  }
`;
