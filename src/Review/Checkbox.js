import React from 'react';
import styled from 'styled-components';

function Checkbox() {
  return (
    <Grade>
      <Font>평점</Font>
      <label>
        <Check type="checkbox" id="1" />
        <Img src="/images/star.png" alt="stat" />
      </label>
      <label>
        <Check type="checkbox" id="2" />
        <Img src="/images/star.png" alt="stat" />
      </label>
      <label>
        <Check type="checkbox" id="3" />
        <Img src="/images/star.png" alt="stat" />
      </label>
      <label>
        <Check type="checkbox" id="4" />
        <Img src="/images/star.png" alt="stat" />
      </label>
      <label>
        <Check type="checkbox" id="5" />
        <Img src="/images/star.png" alt="stat" />
      </label>
    </Grade>
  );
}

export default Checkbox;

const Grade = styled.div`
  margin-top: 10px;
`;

const Font = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 15px;
`;

const Img = styled.img`
  &:hover {
    opacity: 1;
  }
  opacity: 0.2;
`;

const Check = styled.input`
  &:checked {
    display: none;
  }
  &:checked + ${Img} {
    opacity: 1;
  }
  display: none;
`;
