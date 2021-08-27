import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';
import CalenderComp from './CalenderComp';
import { BASE_URL } from '../../config';
import { API } from '../../config';

function ReserveComp(props) {
  const { id, max_count, min_count, facility, price, title, image } =
    props.formValues;
  const [trueFalse, setTrueFalse] = useState();
  const [countValue, setCountValue] = useState(0);
  const [formValues, setFormvalues] = useState({
    date: '',
    option: '',
    count: '',
  });
  const history = useHistory();

  const handleForm = e => {
    let { name, value } = e.target;
    if (name === 'minus') {
      countValue > min_count && setCountValue(countValue - 1);
      name = 'count';
      value = countValue;
    } else if (name === 'plus') {
      countValue < max_count && setCountValue(countValue + 1);
      name = 'count';
      value = countValue;
    }

    setFormvalues({ ...formValues, [name]: value });
  };

  const handleCalenderValue = date => {
    setFormvalues({ date: date });
  };

  const handlePrice = () => {
    const num = parseInt(formValues.option);
    let parsePrice = '';
    price !== undefined &&
      price.map(el => {
        if (num === el[0]) {
          parsePrice = el[2];
        }
        return parsePrice;
      });
    parsePrice = parseInt(parsePrice.split('.')[0]);
    const result = Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3,
    }).format(parsePrice);

    return result;
  };

  const handleImage = () => {
    let images;
    if (image !== undefined) {
      images = image[0];
    }
    return images;
  };

  const handleReserveInfoForUser = () => {
    const { date, option } = formValues;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    let reserveTime = '';
    if (option % 3 === 0) {
      reserveTime = 'All (09시 ~ 22시)';
    } else if (option % 3 === 1) {
      reserveTime = 'Day (09시 ~ 15시)';
    } else {
      reserveTime = 'Night (15시 ~ 22시)';
    }
    let reserveInfo = '';
    if (month && option) {
      reserveInfo = `${year}년 ${month}월 ${day}일, ${reserveTime}`;
    }
    return reserveInfo;
  };

  const transferData = useCallback(async () => {
    try {
      const { date, option, count } = formValues;
      const time = parseInt(option);
      await axios.post(
        `${BASE_URL}/orders?space_id=${id}`,
        {
          date: date,
          option: time,
          count: count,
        },
        {
          headers: {
            Authorization: localStorage.getItem('login_kakao_token'),
          },
        }
      );
      history.push({
        pathname: '/reserve',
        state: {
          id: id,
          title: title,
          images: handleImage(),
          date: formValues.date,
          option: formValues.option,
          price: handlePrice(),
          count: formValues.count,
          max_count: max_count,
          facility: facility,
        },
      });
    } catch (error) {
      alert('로그인 후 이용가능합니다.');
    }
  }, [formValues.count]);

  useEffect(() => {
    const { date, option } = formValues;
    if (date && option) {
      const queryState = `status?date=${date}&option=${option}`;
      const checkReserveValidation = async () => {
        try {
          await axios.get(`${API.DETAIL}/${id}/${queryState}`);
          setTrueFalse(true);
        } catch (error) {
          setTrueFalse(false);
        }
      };
      checkReserveValidation();
    }
  }, [formValues.option]);

  const timeList = [
    {
      id: 'all',
      name: 'option',
      type: 'radio',
      content: 'all',
      value: price !== undefined && price[2][0],
    },
    {
      id: 'day',
      name: 'option',
      type: 'radio',
      content: 'day',
      value: price !== undefined && price[0][0],
    },
    {
      id: 'night',
      name: 'option',
      type: 'radio',
      content: 'night',
      value: price !== undefined && price[1][0],
    },
  ];

  const spaceCondition = [
    {
      id: 1,
      title: '공간유형',
      content: '스터디룸',
    },
    {
      id: 2,
      title: '예약시간',
      content: '최소 6시간',
    },
    {
      id: 3,
      title: '수용인원',
      content: `최대 ${max_count}명`,
    },
  ];

  return (
    <LayoutReserve>
      <div className="ReserveWrap">
        <ReserveBody>
          <section className="MeetSpaceInfo">
            <ImgContainer src={handleImage()}></ImgContainer>
            <SpaceInfoBody></SpaceInfoBody>
          </section>
          <UlContainer>
            {spaceCondition.map(el => {
              return (
                <LiContainer key={el.id}>
                  <LiTitle>{el.title}</LiTitle>
                  <span>{el.content}</span>
                </LiContainer>
              );
            })}
          </UlContainer>
          <section className="FacillityWrap">
            <FlexBoxUl>
              {facility !== undefined &&
                facility.map(el => {
                  return (
                    <FacillityList key={el.id}>
                      <IconBox src={el.image} />
                      <SpanBox>{el.name}</SpanBox>
                    </FacillityList>
                  );
                })}
            </FlexBoxUl>
          </section>
          <ReserveTitle>예약 선택 하기</ReserveTitle>
          <div>
            <CalenderWrap>
              <CalenderTitle>날짜</CalenderTitle>
              <CalenderBox>
                <CalenderComp transferValue={handleCalenderValue} />
              </CalenderBox>
            </CalenderWrap>
            <TimeWrap>
              <TimeTitle>시간</TimeTitle>
              <TimeBox>
                {timeList.map(el => {
                  return (
                    <TimeLabel htmlFor={el.id} key={el.id}>
                      <input
                        id={el.id}
                        name={el.name}
                        type={el.type}
                        value={el.value}
                        checked={+formValues.option === el.value && trueFalse}
                        onChange={handleForm}
                      />
                      {el.content}
                    </TimeLabel>
                  );
                })}
              </TimeBox>
              <WarningMessage>
                예약 도중 이탈하시는 경우, 중복 예약 방지 목적으로 10분 동안
                해당 날짜에 예약하실 수 없습니다. (결제 오류 및 취소 포함)
              </WarningMessage>
            </TimeWrap>
            <ReserveInfoMode mode={isValid(formValues)}>
              <ReserveInfoTitle>예약 일시</ReserveInfoTitle>
              <ReserveInfo>{handleReserveInfoForUser()}</ReserveInfo>
            </ReserveInfoMode>
            <CountWrap>
              <CountTitle>인원</CountTitle>
              <CountWarnMode mode={isValid(formValues)}>
                최대 수용 인원은 {max_count}명입니다.
              </CountWarnMode>
              <CountBox>
                <CountFlexBox>
                  <CountMinusBtn name="minus" onClick={handleForm}>
                    -
                  </CountMinusBtn>
                  <CountInput type="number" value={countValue} disabled />
                  <CountPlusBtn name="plus" onClick={handleForm}>
                    +
                  </CountPlusBtn>
                </CountFlexBox>
              </CountBox>
            </CountWrap>
            <AmountMode mode={isValid(formValues)}>
              <AmountTitle>사용료</AmountTitle>
              <AmountInfo>￦{handlePrice()}</AmountInfo>
            </AmountMode>
          </div>
        </ReserveBody>
        <ReserveBtn onClick={transferData}>바로 예약하기</ReserveBtn>
        {/* 버튼 클릭시 토큰 없으면 로그인 화면으로 이동 / 있으면 예약하기 화면으로 */}
      </div>
    </LayoutReserve>
  );
}

export default ReserveComp;

export const isValid = form => {
  const { date, option } = form;
  let result = '';
  date && option && (result = 'true');
  return result;
};

const LayoutReserve = styled.div`
  width: 338px;
  background-color: white;
`;

const ReserveInfoMode = styled.div`
  display: ${props => (props.mode ? 'block' : 'none')};
  padding: 32px 0 0;
`;

const AmountMode = styled.div`
  display: ${props => (props.mode ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  border-top: 3px solid #704de4;
`;

const ReserveBody = styled.div`
  padding: 15px 20px 30px;
  border: 1px solid #704de4;
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
  margin: 24px 5px 0 0;
  font-size: 12px;
`;

const IconBox = styled.img`
  width: 34px;
  opacity: 50%;
`;

const SpanBox = styled.p`
  width: 50px;
  padding-left: 20px;
`;

const ReserveTitle = styled.div`
  position: relative;
  margin-top: 25px;
  padding: 20px 0;
  border-top: 3px solid #704de4;
  border-bottom: 1px solid #ccc;
  font-size: 17px;
  font-weight: bold;
`;

const ReserveCheck = styled.input`
  position: absolute;
  left: 0;
  width: 250px;
  text-align: right;
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
`;

const CountWarnMode = styled.div`
  display: ${props => (props.mode ? 'block' : 'none')};
  margin-top: 15px;
  color: red;
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
  color: #eee;
  border: none;
  background-color: #704de4;

  &:hover {
    cursor: pointer;
  }
`;
