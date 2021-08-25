import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BtnImage from './Btn';

function Main() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios.get('/data/User.json').then(response => {
      setProductList(response.data);
    });
  }, []);
  return (
    <MainContainer>
      <Wrapper>
        <Keyword>
          <H2>어떤 공간을 찾고 있나요?</H2>
          <Btns>
            <Center>
              {productList.map(el => {
                return <BtnImage src={el.url} text={el.text} id={el.id} />;
              })}
            </Center>
          </Btns>
        </Keyword>
      </Wrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  margin: auto;
  padding: 78px 0 100px;
  width: 1158px;
`;
const Keyword = styled.section`
  margin: 80px auto;
  width: 100%;
`;
const H2 = styled.h2`
  font-size: 40px;
  line-height: 1;
  letter-spacing: -0.5px;
  text-align: center;
  color: #000;
`;
const Btns = styled.div`
  padding: 0;
  display: block;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  justify-content: space-between;
  text-align: center;
`;

export default Main;
