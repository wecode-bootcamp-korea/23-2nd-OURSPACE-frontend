import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

function HostLocation({ location, setLocation }) {
  const changeLocation = e => {
    if (e.target.checked) {
      setLocation(prev => {
        return prev.concat(Number(e.target.id));
      });
    }
  };
  return (
    <FormCheckBoxList>
      <label>
        <FormCheckLeft
          type="radio"
          id="1"
          name="radiopost"
          onChange={changeLocation}
          value={location}
        />
        <FormCheckText>강남구</FormCheckText>
      </label>
      <label>
        <FormCheckLeft
          type="radio"
          id="2"
          name="radiopost"
          onChange={changeLocation}
          value={location}
        />
        <FormCheckText>강북구</FormCheckText>
      </label>
      <label>
        <FormCheckLeft
          type="radio"
          id="3"
          name="radiopost"
          onChange={changeLocation}
          value={location}
        />
        <FormCheckText>강서구</FormCheckText>
      </label>
      <label>
        <FormCheckLeft
          type="radio"
          id="4"
          name="radiopost"
          onChange={changeLocation}
          value={location}
        />
        <FormCheckText>강동구</FormCheckText>
      </label>
    </FormCheckBoxList>
  );
}

export default HostLocation;

const FormCheckBoxList = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
`;

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
