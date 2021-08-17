import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

function HostRadioCom({ checkedInputs, setCheckedInputs, id, name }) {
  const changeRadio = e => {
    if (e.target.checked) {
      setCheckedInputs(prev => {
        return prev.concat(Number(e.target.id));
      });
    }
  };
  return (
    <div>
      <label>
        <FormCheckLeft
          type="radio"
          id={id}
          name="radioButton"
          onChange={changeRadio}
          value={checkedInputs}
        />
        <FormCheckText>{name}</FormCheckText>
      </label>
    </div>
  );
}

export default HostRadioCom;

const FormCheckText = styled.span`
  font-size: 18px;
  width: 110px;
  height: 35px;
  background: #e6e6e6;
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
`;

const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
  &:checked {
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &:checked + ${FormCheckText} {
    background: #e4794d;
    color: #fff;
  }
  display: none;
`;
