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
                return (
                  <BtnImage
                    key={el.id}
                    id={el.id}
                    src={el.url}
                    text={el.text}
                  />
                );
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
  width: 1158px;
  margin: auto;
  padding: 78px 0 100px;
`;

const Keyword = styled.section`
  width: 100%;
  margin: 80px auto;
`;

const H2 = styled.h2`
  color: #000;
  font-size: 40px;
  line-height: 1;
  letter-spacing: -0.5px;
  text-align: center;
`;

const Btns = styled.div`
  display: block;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 500px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
`;

export default Main;
