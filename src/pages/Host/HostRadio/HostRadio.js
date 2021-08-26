import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import HostRadioCom from './HostRadioCom';
import { API } from '../../../config';

function HostRadio({ button, setButton, setCheckedInputs, checkedInputs }) {
  const getData = useCallback(async () => {
    try {
      const response = await axios.get(API.CATEGORY_API);
      setButton(response.data.RESULT);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <FormBox>
      <FormText>
        <FormTextLeft>
          <FormBoxTitle>공간 유형</FormBoxTitle>
          <FormBoxTitleOption>*</FormBoxTitleOption>
        </FormTextLeft>
        <FormBoxOptionColor>필수입력</FormBoxOptionColor>
      </FormText>
      <FormCheckContents>
        <FormCheckBox>
          <FormCheckRight>유형</FormCheckRight>
          {button &&
            button.map(radioButton => {
              return (
                <HostRadioCom
                  key={radioButton.id}
                  id={radioButton.id}
                  name={radioButton.name}
                  setCheckedInputs={setCheckedInputs}
                  checkedInputs={checkedInputs}
                />
              );
            })}
        </FormCheckBox>
      </FormCheckContents>
    </FormBox>
  );
}

export default HostRadio;

const FormBox = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const FormText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormTextLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FormBoxTitle = styled.div`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const FormBoxTitleOption = styled.span`
  color: #ff3a48;
  font-size: 24px;
  padding-left: 5px;
  font-weight: 700;
`;

const FormCheckContents = styled.div`
  margin-top: 20px;
`;

const FormBoxOptionColor = styled.span`
  color: #ff3a48;
  font-size: 16px;
`;

const FormCheckBox = styled.ul`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const FormCheckRight = styled.li`
  font-size: 18px;
  width: 120px;
  height: 35px;
  background: #6d3bff;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
