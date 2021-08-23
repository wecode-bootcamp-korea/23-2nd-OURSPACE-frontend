import React from 'react';
import styled from 'styled-components';

function Review() {
  return (
    <Container>
      <Reviews>
        <Text>
          <Intro>
            이용후기&nbsp;
            <Primary>
              <Em>1개</Em>
            </Primary>
            <Dot></Dot>
            <Span>
              평균 평점&nbsp;
              <Primary>
                <Em>5.0</Em>
              </Primary>
            </Span>
          </Intro>
        </Text>
        <div className="reviewBox">
          <ul className="reviewlist">
            <Lists>
              <Rbox>
                <Userimg></Userimg>
                <Name>택준</Name>
                <Preview>후기후기후기후기후기후기</Preview>
                <Time>
                  <Timeinfo>2021.08.23 18:50:01</Timeinfo>
                </Time>
                <Area>
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                </Area>
              </Rbox>
              <Reply>
                <Tit>
                  <Em>호스트님의 답글</Em>
                </Tit>
                <Hostrv>기후기후기후기후기후기후</Hostrv>
                <Time>
                  <Timeinfo>2021.08.23 19:52:23</Timeinfo>
                </Time>
              </Reply>
            </Lists>
          </ul>
        </div>
        <ReviewPostBox>
          <ReviewPost></ReviewPost>
          <ReviewButton>등록</ReviewButton>
        </ReviewPostBox>
      </Reviews>
    </Container>
  );
}
export default Review;

const Container = styled.div`
  min-height: 760px;
  background: #f6f6f6;
`;

const Reviews = styled.div`
  width: 760px;
  height: 340px;
  /* border: 1px solid black; */
  margin: 0 auto;
`;

const Text = styled.div`
  border-top: 1px solid #f6f6f6;
  margin-bottom: 50px;
  position: relative;
  line-height: 25px;
  width: 100%;
`;

const Intro = styled.h4`
  padding-bottom: 16px;
  margin-bottom: 28px;
  vertical-align: top;
  position: relative;
  margin: 70px 0 28px;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  &::after {
    width: 20px;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    display: block;
    background-color: #ffd014;
  }
`;

const Primary = styled.strong`
  color: #6d3afb;
`;

const Em = styled.em`
  vertical-align: top;
  color: #6d3afb;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  margin: 0 5px;
  display: inline-block;
  border-radius: 50%;
  background-color: #949494;
  vertical-align: middle;
`;

const Span = styled.span`
  vertical-align: top;
`;
const Lists = styled.li`
  padding: 24px 0 0;
  font-size: 16px;
  border-top: 0;
  border-bottom: 1px solid #ebebeb;
`;
const Rbox = styled.div`
  padding: 0 0 24px 110px;
  position: relative;
`;
const Userimg = styled.span`
  background-image: url('/images/review.jpeg');
  background-repeat: no-repeat;
  top: 0;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  position: absolute;
  left: 0;
  border-radius: 45px;
  background-size: cover;
  background-position: 50%;
`;
const Name = styled.strong`
  margin-top: 3px;
  margin-right: 117px;
  font-size: 18px;
  line-height: 21px;
  display: inline-block;
  word-wrap: break-word;
  word-break: break-all;
`;
const Preview = styled.p`
  margin-top: 11px;
  line-height: 28px;
  color: #656565;
`;
const Time = styled.div`
  margin-top: 13px;
`;
const Timeinfo = styled.span`
  font-size: 12px;
  color: #b2b2b2;
  vertical-align: top;
`;
const Area = styled.div`
  top: 4px;
  position: absolute;
  right: 0;
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
`;
const Reply = styled.div`
  padding-top: 11px;
  padding: 0 0 24px 110px;
  position: relative;
`;
const Tit = styled.p`
  font-size: 18px;
  color: #6d3afb;
`;
const Hostrv = styled.p`
  margin-top: 11px;
  line-height: 28px;
  color: #656565;
`;

const ReviewPostBox = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 760px;
  margin: 0 auto;
`;

const ReviewPost = styled.input`
  width: 640px;
  height: 160px;
  border: 1px solid #e0e0e0;
`;

const ReviewButton = styled.button`
  width: 100px;
  height: 50px;
  background: #6d3afb;
  border: none;
  color: #fff;
  border: 1px solid #6d3afb;
  cursor: pointer;
  font-size: 16px;
`;
