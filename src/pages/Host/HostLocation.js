import React from 'react';
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
  display: flex;
  justify-content: space-between;
  width: 900px;
`;

const FormCheckText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 35px;
  background: #e6e6e6;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  color: #777;
`;

const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
  display: none;
  &:checked {
    display: none;
    height: 35px;
    padding: 0px 10px;
    background: none;
    text-align: center;
    line-height: 33px;
    font-weight: 500;
  }

  &:checked + ${FormCheckText} {
    background: #e4794d;
    color: #fff;
  }
`;
