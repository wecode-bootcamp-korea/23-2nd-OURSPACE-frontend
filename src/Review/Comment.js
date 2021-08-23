import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

function Comment({ text, userId, userImg }) {
  return (
    <>
      <Userimg>{userImg}</Userimg>
      <Name>{userId}</Name>
      <Preview>{text}</Preview>
      <Time>
        <Timeinfo>2021.08.23 18:50:01</Timeinfo>
      </Time>
      <Area>
        <img src="/images/star.png" alt="stat" />
        <img src="/images/star.png" alt="stat" />
        <img src="/images/star.png" alt="stat" />
        <img src="/images/star.png" alt="stat" />
        <img src="/images/star.png" alt="stat" />
      </Area>
    </>
  );
}

export default Comment;
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
