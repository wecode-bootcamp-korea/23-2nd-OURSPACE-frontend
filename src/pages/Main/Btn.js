import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

function BtnImage(props) {
  return (
    <BtnImages>
      <Button>
        <MainImage {...props} />
        <Text>{props.text}</Text>
      </Button>
    </BtnImages>
  );
}

export default BtnImage;

const BtnImages = styled.div`
  display: inline-block;
  margin-top: 50px;
  text-align: center;
  /* width: 12.5%; */
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
const Text = styled.div`
  margin-top: 16px;
  font-size: 18px;
`;
const MainImage = styled.img.attrs(props => ({
  src: props.src,
}))``;
