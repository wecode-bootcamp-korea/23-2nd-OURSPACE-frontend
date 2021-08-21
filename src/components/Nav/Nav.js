import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  const history = useHistory();
  const [isBlock, setIsBlock] = useState('none');

  const handleToken = () => {
    const token = localStorage.getItem('login_kakao_token');
    if (token) {
      localStorage.removeItem('login_kakao_token');
      alert('로그아웃되었습니다.');
    } else {
      history.push('/signin');
    }
  };

  return (
    <Header>
      <Button>
        <OurSpace href="/">a</OurSpace>
      </Button>
      <Wrap>
        <Auto>
          <Search></Search>
          <Input
            onFocus={() => {
              setIsBlock('block');
            }}
            onBlur={() => {
              setIsBlock('none');
            }}
            type="text"
            placeholder="지역, 공간유형, 공간명으로 찾아보세요"
          />
        </Auto>
        <Lately id="2" isBlock={isBlock}>
          <Flex>
            <Title>최근검색어</Title>
            <Delete>전체삭제</Delete>
          </Flex>
        </Lately>
      </Wrap>
      <Space>
        <NavLink href="/hostpost">내 공간 등록하기</NavLink>
      </Space>
      <KakaoButton onClick={handleToken}>
        <Login>로그인</Login>
      </KakaoButton>
    </Header>
  );
}

export default Nav;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  min-width: 768px;
  z-index: 100;
  text-align: center;
  font-size: 16px;
  color: #000;
  line-height: 0;
  background: #fff;
  border-bottom: 1px solid #f6f6f6;
`;
const Button = styled.button`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  padding: 24px 0 23px 30px;
  outline: inherit;
  border: none;
  cursor: pointer;
  background: none;
`;
const OurSpace = styled.a`
  display: block;
  width: 200px;
  height: 50px;
  background-image: url('/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  text-indent: -999em;
  overflow: hidden;
`;
const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin-left: 252px;
  background: transparent;
  text-align: left;
`;
const Auto = styled.div`
  position: relative;
  width: 480px;
  height: 78px;
  min-width: 140px;
  left: 0;
  top: 0;
`;
const Search = styled.button`
  position: absolute;
  top: 26px;
  left: 35px;
  width: 25px;
  height: 25px;
  opacity: 0.98;
  border: none;
  background-image: url('/images/loupe.png');
  background-size: cover;
  /* background: white; */
  background-repeat: no-repeat;
  z-index: 1;
`;
const Input = styled.input`
  position: relative;
  display: inline-block;
  width: 480px;
  height: 50px;
  padding: 15px 50px 15px 55px;
  margin: 14px 0 0 20px;
  border-radius: 24px;
  border: 1px solid #f6f6f6;
  background-color: #f6f6f6;
  color: #333;
  line-height: 1.2;
  font-size: 16px;
  vertical-align: middle;
  outline: none;
  &:focus {
    border: 1px solid #704de4;
    /* background-color: #fff; */
  }
`;
const Space = styled.div`
  position: absolute;
  right: 85px;
  top: 0;
`;
const NavLink = styled.a`
  display: block;
  padding: 0 10px;
  height: 78px;
  float: right;
  line-height: 78px;
  color: #333;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
`;
const KakaoButton = styled.button`
  position: absolute;
  width: 88px;
  height: auto;
  top: 0;
  right: 0;
  padding: 28px 30px;
  z-index: 10;
  background: none;
  color: inherit;
  border: none;
  outline: inherit;
  cursor: pointer;
  vertical-align: middle;
`;
const Login = styled.i`
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: url('/images/kakaotalk.png');
  background-size: cover;
  color: transparent;
  background-repeat: no-repeat;
`;
const Lately = styled.div`
  width: 480px;
  height: 350px;
  border: 1px solid black;
  margin-left: 20px;
  display: ${props => props.isBlock};
  background: #fff;
  border: 1px solid #ebebeb;
  z-index: 1;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;
const Delete = styled.p`
  color: #a1a1a1;
`;
