import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';

function Reserve() {
  const history = useHistory();
  const location = useLocation();
  const { id, title, date, option, price, count, max_count, facility, images } =
    location.state;
  const [timeValue, setTimeValue] = useState();
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    const handleOption = () => {
      if (option % 3 === 0) {
        setTimeValue('All (09시 ~ 22시)');
      } else if (option % 3 === 1) {
        setTimeValue('Day (09시 ~ 15시)');
      } else {
        setTimeValue('Night (15시 ~ 22시)');
      }
    };
    handleOption();
  }, [timeValue]);

  const movePage = () => {
    alert('결제가 완료되었습니다.');
    history.push({
      pathname: '/',
    });
  };

  const handleInputValue = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  const reserveInfoList = [
    {
      id: 1,
      title: '예약날짜',
      content: date,
    },
    {
      id: 2,
      title: '예약시간',
      content: timeValue,
    },
    {
      id: 3,
      title: '예약인원',
      content: count + ' 명',
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
    <ReseveWrap>
      <ReseveBody>
        <ReserveTitle>예약하기</ReserveTitle>
        <InfoWrap>
          <InfoBody>
            <div>
              <Title>{title}</Title>
              <WrapBody>
                <section className="MeetSpaceInfo">
                  <ImgContainer src={images} alert="spaceImg"></ImgContainer>
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
                  <UlFlexBox>
                    {facility !== undefined &&
                      facility.map(el => {
                        return (
                          <FacillityList key={el.id}>
                            <IconBox src={el.image} />
                            <SpanBox>{el.name}</SpanBox>
                          </FacillityList>
                        );
                      })}
                  </UlFlexBox>
                </section>
              </WrapBody>
            </div>
            <div className="ReserveInfoWrap">
              <WrapTitle>예약 정보</WrapTitle>
              <ReserveWrapBody>
                {reserveInfoList.map(el => {
                  return (
                    <ReserveInfoWrap key={el.id}>
                      <ReserveInfoTitle>{el.title}</ReserveInfoTitle>
                      <ReserveInfoContent>{el.content}</ReserveInfoContent>
                    </ReserveInfoWrap>
                  );
                })}
              </ReserveWrapBody>
            </div>
            <div className="CustomerInfoWrap">
              <WrapTitle>예약자 정보</WrapTitle>
              <CustomerInfoWrapBody>
                <ul>
                  {NEEDINFOLIST.map(el => {
                    return (
                      <LiFlexBox key={el.id}>
                        <CustomerInfoTitle>
                          {el.title}
                          <Necessary> {el.need}</Necessary>
                        </CustomerInfoTitle>
                        <CustomerInfoInput
                          id={el.id}
                          name={el.name}
                          onChange={handleInputValue}
                        />
                      </LiFlexBox>
                    );
                  })}
                  <LiFlexBox>
                    <CustomerInfoTitle>사용목적</CustomerInfoTitle>
                    <CustomerInfoInput
                      id="purpose"
                      name="purpose"
                      placeholder="촬영, 파티, 모임, 수업 등 공간의 사용 목적을 입력해주세요."
                      onChange={handleInputValue}
                    />
                  </LiFlexBox>
                  <LiFlexBox>
                    <CustomerInfoTitle>요청사항</CustomerInfoTitle>
                    <CustomerTextarea
                      id="content"
                      name="content"
                      placeholder="남기고 싶은말을 적어주세요. (최대 500자)"
                      onChange={handleInputValue}
                    />
                  </LiFlexBox>
                </ul>
              </CustomerInfoWrapBody>
              <CheckContentMessage>
                <span>
                  <img
                    src="/images/exclamation.png"
                    width="10px"
                    alt="exclamation mark"
                  />{' '}
                  예약자 정보로 알림톡과 이메일이 발송됩니다. 정확한 정보인지
                  확인해주세요.
                </span>
              </CheckContentMessage>
            </div>
          </InfoBody>
          <ReserveSideBar>
            <Title>결제 예정금액</Title>
            <SideBarBody>
              <ul>
                {reserveInfoList.map(el => {
                  return (
                    <SideBarListWrap key={el.id}>
                      <SideBarLiTitle>{el.title}</SideBarLiTitle>
                      <SideBarLiContent>{el.content}</SideBarLiContent>
                    </SideBarListWrap>
                  );
                })}
              </ul>
              <SideBarPriceWrap>
                <p>￦</p>
                <SideBarPrice>{price}</SideBarPrice>
              </SideBarPriceWrap>
            </SideBarBody>
            <ReserveBtn onClick={movePage}>결제하기</ReserveBtn>
          </ReserveSideBar>
        </InfoWrap>
      </ReseveBody>
    </ReseveWrap>
  );
}

export default Reserve;

const NEEDINFOLIST = [
  {
    id: 1,
    name: 'name',
    title: '예약자',
    need: '*',
  },
  {
    id: 2,
    name: 'phone_number',
    title: '연락처',
    need: '*',
  },
  {
    id: 3,
    name: 'email',
    title: '이메일',
    need: '*',
  },
];

const ReseveWrap = styled.div`
  background-color: #f6f6f6;
`;

const ReseveBody = styled.div`
  margin: 0 auto;
`;

const ReserveTitle = styled.h2`
  width: 1258px;
  margin: 0 auto;
  padding: 120px 0 20px;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

const InfoWrap = styled.div`
  position: relative;
  width: 1258px;
  margin: 0 auto;
`;

const InfoBody = styled.section`
  width: 768px;
  padding: 30px 50px 100px;
`;

const Title = styled.h2`
  padding: 2px 0 15px;
  border-bottom: 3px solid #704de4;
  font-size: 1.1rem;
  font-weight: 600;
`;

const WrapTitle = styled.h2`
  margin-top: 59px;
  padding: 2px 0 15px;
  border-bottom: 3px solid #704de4;
  font-size: 1.1rem;
  font-weight: 600;
`;

const WrapBody = styled.div`
  padding: 30px 30px 39px;
  background-color: white;
`;

const ReserveWrapBody = styled.div`
  padding: 0 30px;
  background-color: white;
`;

const ReserveInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ebebeb;
`;

const ReserveInfoTitle = styled.p`
  color: #656565;
`;

const ReserveInfoContent = styled.p`
  font-weight: bold;
`;

const ImgContainer = styled.img`
  width: 600px;
`;

const SpaceInfoBody = styled.p`
  padding: 10px 10px 20px;
  text-align: center;
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

const UlFlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 100px;
`;

const FacillityList = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin: 24px 5px 0 0;
  font-size: 12px;
`;

const SpanBox = styled.span`
  width: 60px;
  padding-left: 3px;
`;

const IconBox = styled.img`
  width: 34px;
  opacity: 50%;
`;

const LiFlexBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const CustomerInfoWrapBody = styled.div`
  margin-top: 30px;
`;

const CustomerInfoTitle = styled.p`
  width: 88px;
  color: #656565;
`;

const CustomerInfoInput = styled.input`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0 16px;
  border: 1px solid #bbb;
  font-size: 1rem;
  outline: none;
`;

const Necessary = styled.span`
  color: red;
`;

const CustomerTextarea = styled.textarea`
  padding: 15px 16px;
  width: 100%;
  height: 134px;
  border: 1px solid #bbb;
  font-size: 1rem;
  resize: none;
`;

const CheckContentMessage = styled.div`
  margin: 21px 1px 0;
  padding-left: 23px;
  color: #656565;
  font-size: 0.9rem;
`;

const ReserveSideBar = styled.section`
  position: absolute;
  top: 30px;
  right: 100px;
  width: 368px;
`;

const SideBarBody = styled.div`
  padding: 0 20px;
  background-color: white;
`;

const SideBarListWrap = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 17px 0 15px;
  border-bottom: 1px solid #ebebeb;
`;

const SideBarLiTitle = styled.p`
  color: #656565;
`;

const SideBarLiContent = styled.p`
  margin-right: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const SideBarPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 0 23px;
  color: #6d3afb;
  border-top: 3px solid #704de4;
  font-size: 1.7rem;
  font-weight: bold;
`;

const SideBarPrice = styled.p`
  font-size: 1.7rem;
`;

const ReserveBtn = styled.button`
  width: 368px;
  height: 60px;
  border: none;
  color: white;
  background-color: #704de4;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
  }
`;
