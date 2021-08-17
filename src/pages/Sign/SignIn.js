import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { LOGIN_API } from '../../config';

const SignIn = () => {
  const history = useHistory();

  const loginwithkakao = () => {
    window.Kakao.Auth.login({
      success: async auth => {
        try {
          const response = await axios.get(`${LOGIN_API}`, {
            headers: {
              Authorization: auth.access_token,
            },
          });
          if (auth.access_token) {
            localStorage.setItem('login_kakao_token', auth.access_token);
            alert('로그인 되었습니다!');
            history.push('/');
          } else {
            alert('로그인 정보를 다시 확인해주세요');
          }
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
      fail: error => {
        console.log(error);
      },
    });
  };

  return (
    <LoginContainer>
      <H2>로그인</H2>
      <ContentLogin>
        <Inner>
          <div>
            <Naver onClick={loginwithkakao}>카카오톡 로그인</Naver>
          </div>
          <P>
            <Span>또는</Span>
          </P>
          <Field>
            <div>
              <Input type="text" placeholder="이메일" />
              <Input type="pasword" placeholder="비밀번호" />
            </div>
            <div>
              <Left>
                <input type="checkbox" />
                <Label>로그인 기억하기</Label>
              </Left>
              <Pw href="">비밀번호 찾기</Pw>
            </div>
            <Button type="submit">이메일로 로그인</Button>
          </Field>
          <p></p>
        </Inner>
      </ContentLogin>
    </LoginContainer>
  );
};
export default SignIn;

const LoginContainer = styled.div`
  position: relative;
  background: #f6f6f6;
  height: 100vh;
`;
const H2 = styled.h2`
  padding-top: 120px;
  padding-bottom: 20px;
  font-size: 34px;
  text-align: center;
  letter-spacing: -0.5px;
  line-height: 1.2;
  color: #000;
`;
const ContentLogin = styled.section`
  position: relative;
  display: block;
  padding: 150px 50px 50px;
  padding-top: 30px;
  width: 1258px;
  margin: 0 auto;
  background: none;
`;
const Inner = styled.div`
  width: 648px;
  padding: 32px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
`;

const Naver = styled.button`
  width: 100%;
  font-size: 16px;
  line-height: 56px;
  display: block;
  position: relative;
  border: 1px solid black;
  color: #000;
  background: #fff;
  text-align: center;
  border-radius: 5px;
`;
const P = styled.p`
  position: relative;
  width: 100%;
  margin-top: 32px;
  text-align: center;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ebebeb;
  }
`;
const Span = styled.span`
  display: inline-block;
  position: relative;
  padding: 0 15px;
  color: #000;
  font-size: 14px;
  background: #fff;
`;
const Field = styled.div`
  padding-top: 30px;
`;
const Input = styled.input`
  height: 48px;
  display: inline-block;
  position: relative;
  width: 100%;
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 0 10px;
  font-size: 14px;
  margin-bottom: 16px;
`;
const Left = styled.p`
  float: left;
`;

const Label = styled.label`
  font-size: 14px;
  display: inline-block;
  position: relative;

  cursor: pointer;
  color: #000;
`;
const Pw = styled.p`
  float: right;
  font-size: 14px;
  cursor: pointer;
`;
const Button = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  margin-top: 44px;
  background: #ffd014;
  color: #000;
  font-size: 14px;
  line-height: 48px;
  border: none;
`;
