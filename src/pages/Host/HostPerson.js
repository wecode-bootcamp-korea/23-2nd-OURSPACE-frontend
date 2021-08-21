import React from 'react';
import styled from 'styled-components';

function HostPerson({ number, setNumber }) {
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  };
  return (
    <FormBoxAmenity>
      <FormTextAmenity>
        <FormTextLeft>
          <FormBoxTitle>예약허용</FormBoxTitle>
          <FormBoxTitleOption>*</FormBoxTitleOption>
        </FormTextLeft>
      </FormTextAmenity>
      <Reserve>
        <ReserveText>최소 수용인원</ReserveText>
        <Amount>최소 수용인원은 1명입니다.</Amount>
        <ReserveText>최대 수용인원</ReserveText>
        <ButtonAmount>
          <ButtonMin onClick={onDecrease}>-</ButtonMin>
          <Amount>{number}</Amount>
          <ButtonPlus onClick={onIncrease}>+</ButtonPlus>
        </ButtonAmount>
      </Reserve>
    </FormBoxAmenity>
  );
}

export default HostPerson;
const FormTextLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FormBoxTitle = styled.div`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const FormBoxTitleOption = styled.span`
  padding-left: 5px;
  color: #ff3a48;
  font-size: 24px;
  font-weight: 700;
`;

const FormBoxAmenity = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;
const FormTextAmenity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #777;
`;

const Reserve = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

const ReserveText = styled.p`
  margin-right: 60px;
  color: #2c2c2c;
  font-weight: 700;
`;

const ButtonAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 200px;
  border: 1px solid #e0e0e0;
`;

const ButtonMin = styled.button`
  height: 100%;
  width: 50px;
  background-color: transparent;
  border: 0 solid #777;
  font-size: 20px;
  background-color: #e6e6e6;
  cursor: pointer;
`;

const ButtonPlus = styled.button`
  height: 100%;
  width: 50px;
  background-color: #e6e6e6;
  border: 0 solid #777;
  font-size: 20px;
  cursor: pointer;
`;

const Amount = styled.p`
  color: #777;
  font-size: 16px;
`;
