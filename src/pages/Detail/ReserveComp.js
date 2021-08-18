import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalenderComp from './CalenderComp';

function Reserve() {
  const [alertMode, setAlertMode] = useState('alertDisable');
  const [reserveInfoMode, setReserveInfoMode] = useState('reserveInfoDisable');
  const [amountMode, setAmountMode] = useState('amountDisable');
  const [timeValue, setTimeValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [countValue, setCountValue] = useState(0);
  // let [amountValue, setAmountValut] = useState(0); // 공간등록 페이지에서 받아서 쓸 예정

  useEffect(() => {
    countValue < 5 && setAlertMode('alertDisable');

    if (dateValue && timeValue) {
      setReserveInfoMode('reserveInfoAble');
      setAmountMode('amountAble');

      // fetch() // 예약 가능 유효성 검사를 위해 백엔드에 날짜와 시간 데이터 전달
    } else {
      setReserveInfoMode('reserveInfoDisable');
      setAmountMode('amountDisable');
    }
  }, [countValue, dateValue, timeValue]);

  // 통신 관련

  // 시간 관련
  const getTimeValue = e => {
    const { id } = e.target;
    setTimeValue(id);
  };

  // 날짜 관련
  const getCalenderValue = date => {
    setDateValue(date);
  };

  const reserveInfoForUser = () => {
    const year = dateValue.slice(0, 4);
    const month = dateValue.slice(5, 7);
    const day = dateValue.slice(8, 10);
    let reserveInfo = '';

    let reserveTime = '';
    switch (timeValue) {
      case 'ALL':
        reserveTime = 'All (09시 ~ 22시)';
        break;
      case 'DAY':
        reserveTime = 'Day (09시 ~ 15시)';
        break;
      case 'NIGHT':
        reserveTime = 'Night (15시 ~ 22시)';
        break;
      default:
        reserveTime = '';
        break;
    }

    if (month && timeValue) {
      reserveInfo = `${year}년 ${month}월 ${day}일, ${reserveTime}`;
    }

    return reserveInfo;
  };

  // 인원 관련
  const CountBtn = e => {
    const { id } = e.target;
    if (id === 'minus') {
      countValue > 0 && setCountValue(countValue - 1);
    } else {
      countValue >= 5
        ? setAlertMode('alertAble')
        : setCountValue(countValue + 1);
    }
  };

  // 가격 관련

  return (
    <LayoutReserve>
      <div className="ReserveWrap">
        <ReserveBody>
          <section className="MeetSpaceInfo">
            <ImgContainer src="./images/test.jpg"></ImgContainer>
            <SpaceInfoBody>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </SpaceInfoBody>
          </section>
          <UlContainer>
            <LiContainer>
              <LiTitle>공간유형</LiTitle>
              <span>스터디룸</span>
            </LiContainer>
            <LiContainer>
              <LiTitle>예약시간</LiTitle>
              <span>최소 6시간</span>
            </LiContainer>
            <LiContainer>
              <LiTitle>수용인원</LiTitle>
              <span>최대 5명</span>
            </LiContainer>
          </UlContainer>
          <section className="FacillityWrap">
            <FlexBoxUl>
              <FacillityList>
                <IconBox src="/images/bed_on.png" />
                <span>침대</span>
              </FacillityList>
              <FacillityList>
                <IconBox src="/images/beer_on.png" />
                <span>맥주</span>
              </FacillityList>
              <FacillityList>
                <IconBox src="/images/dog_on.png" />
                <span>
                  반려
                  <br />
                  동물
                </span>
              </FacillityList>
              <FacillityList>
                <IconBox src="/images/parking_on.png" />
                <span>주차</span>
              </FacillityList>
              <FacillityList>
                <IconBox src="/images/tv_on.png" />
                <span>티비</span>
              </FacillityList>
              <FacillityList>
                <IconBox src="/images/wifi_on.png" />
                <span>
                  와이
                  <br />
                  파이
                </span>
              </FacillityList>
            </FlexBoxUl>
          </section>
          <ReserveTitle>예약 선택</ReserveTitle>
          <CalenderWrap>
            <CalenderTitle>날짜</CalenderTitle>
            <CalenderBox>
              <CalenderComp transferValue={getCalenderValue} />
            </CalenderBox>
          </CalenderWrap>
          <TimeWrap>
            <TimeTitle>시간</TimeTitle>
            <TimeBox onChange={getTimeValue}>
              <TimeLabel htmlFor="ALL">
                <input id="ALL" name="time" type="radio" />
                All
              </TimeLabel>
              <TimeLabel htmlFor="DAY">
                <input id="DAY" name="time" type="radio" />
                Day
              </TimeLabel>
              <TimeLabel htmlFor="NIGHT">
                <input id="NIGHT" name="time" type="radio" />
                Night
              </TimeLabel>
            </TimeBox>
            <WarningMessage>
              예약 도중 이탈하시는 경우, 중복 예약 방지 목적으로 10분 동안 해당
              날짜에 예약하실 수 없습니다. (결제 오류 및 취소 포함)
            </WarningMessage>
          </TimeWrap>
          <div className={reserveInfoMode}>
            <ReserveInfoTitle>예약 일시</ReserveInfoTitle>
            <ReserveInfo>{reserveInfoForUser()}</ReserveInfo>
          </div>
          <CountWrap>
            <CountTitle>인원</CountTitle>
            <div className={alertMode}>최대 수용 인원은 5명입니다.</div>
            <CountBox>
              <CountFlexBox>
                <CountMinusBtn id="minus" onClick={CountBtn}>
                  -
                </CountMinusBtn>
                <CountInput type="number" value={countValue} disabled />
                <CountPlusBtn id="plus" onClick={CountBtn}>
                  +
                </CountPlusBtn>
              </CountFlexBox>
            </CountBox>
          </CountWrap>
          <div className={amountMode}>
            <AmountTitle>사용료</AmountTitle>
            <AmountInfo>￦50,000(데이터)</AmountInfo>
          </div>
        </ReserveBody>
        <ReserveBtn>바로 예약하기</ReserveBtn>
        {/* 버튼 클릭시 토큰 없으면 로그인 화면으로 이동 / 있으면 예약하기 화면으로 */}
      </div>
    </LayoutReserve>
  );
}

export default Reserve;

const LayoutReserve = styled.div`
  width: 338px;
`;

const ReserveBody = styled.div`
  padding: 15px 20px 30px;
  border: 1px solid #704de4;

  .reserveInfoAble {
    display: block;
    padding: 32px 0 0;
  }

  .reserveInfoDisable {
    display: none;
  }

  .amountAble {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    border-top: 3px solid #704de4;
  }

  .amountDisable {
    display: none;
  }
`;

const ImgContainer = styled.img`
  width: 100%;
`;

const SpaceInfoBody = styled.p`
  padding: 10px 10px 20px;
  text-align: center;
  font-size: 12px;
  word-break: keep-all;
  line-height: 1.5;
`;

const UlContainer = styled.ul`
  border-bottom: 1px solid #ebebeb;
`;

const LiContainer = styled.li`
  position: relative;
  padding: 12px 0 11px 85px;
  border-top: 1px solid #ebebeb;
  font-size: 12px;
`;

const LiTitle = styled.span`
  position: absolute;
  left: 14px;
  margin-left: 10px;
  color: #656565;

  &::before {
    content: '▪︎';
    position: absolute;
    left: -10px;
  }
`;

const FlexBoxUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FacillityList = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  margin: 24px 5px 0 0;
  font-size: 12px;
`;

const IconBox = styled.img`
  width: 34px;
  opacity: 50%;
`;

const ReserveTitle = styled.p`
  margin-top: 25px;
  padding: 20px 0;
  border-top: 3px solid #704de4;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
  font-weight: bold;
`;

const CalenderWrap = styled.section`
  padding-top: 32px;
`;

const CalenderTitle = styled.p`
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
  font-weight: 500;
`;

const CalenderBox = styled.div`
  text-align: center;

  .react-datepicker {
    background-color: #fff;
  }
`;

const TimeWrap = styled.section`
  padding-top: 32px;
`;

const TimeTitle = styled.p`
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
  font-weight: 500;
`;

const TimeBox = styled.div`
  margin-top: 15px;
  text-align: center;

  .react-datepicker {
    background-color: #fff;
  }
`;

const TimeLabel = styled.label`
  padding: 0 20px;
`;

const WarningMessage = styled.p`
  margin-top: 15px;
  padding-left: 23px;
  color: red;
  font-size: 13px;
  word-break: keep-all;
  line-height: 1.5;
`;

const ReserveInfoTitle = styled.p`
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: 500;
`;

const ReserveInfo = styled.p`
  font-size: 13px;
  text-align: right;
`;

const CountWrap = styled.section`
  padding-top: 32px;

  .alertAble {
    display: block;
    margin-top: 15px;
    color: red;
  }

  .alertDisable {
    display: none;
  }
`;

const CountTitle = styled.p`
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
  font-weight: 500;
`;

const CountBox = styled.div`
  margin-top: 15px;
  text-align: center;

  .react-datepicker {
    background-color: #fff;
  }
`;

const CountFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-left: none;
  border-right: none;
`;

const CountInput = styled.input`
  padding: 0 10px;
  border: none;
  background-color: white;
  font-size: 17px;
  text-align: center;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CountMinusBtn = styled.button`
  width: 58px;
  height: 50px;
  background-color: transparent;
  border: 0 solid #777;
  background-color: #e6e6e6;

  &:hover {
    cursor: pointer;
  }
`;

const CountPlusBtn = styled.button`
  height: 50px;
  width: 58px;
  background-color: #e6e6e6;
  border: 0 solid #777;

  &:hover {
    cursor: pointer;
  }
`;

const AmountTitle = styled.p`
  margin-top: 10px;
  padding: 20px 0;
  font-size: 17px;
  font-weight: bold;
`;

const AmountInfo = styled.p`
  margin-top: 10px;
  color: #704de4;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
`;

const ReserveBtn = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 100px;
  color: #eee;
  border: none;
  background-color: #704de4;
`;
