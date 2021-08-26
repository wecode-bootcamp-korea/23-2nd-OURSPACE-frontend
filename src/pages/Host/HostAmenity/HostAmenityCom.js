import React from 'react';
import styled from 'styled-components';

function HostAmenityCom({
  name,
  image,
  id,
  checkedBoxInputs,
  setCheckedBoxInputs,
}) {
  const changeCheckbox = e => {
    if (e.target.checked) {
      setCheckedBoxInputs(prev => {
        return prev.concat(Number(e.target.id));
      });
    }
  };
  return (
    <FormIconList>
      <Label>
        <FormIconBox
          type="checkbox"
          onChange={changeCheckbox}
          value={checkedBoxInputs}
          id={id}
          name={checkedBoxInputs}
        />
        <FormIconImg src={image} />
      </Label>
      <FormIconText>{name}</FormIconText>
    </FormIconList>
  );
}

export default HostAmenityCom;

const FormIconList = styled.ul`
  width: 90px;
  height: 120px;
  margin-bottom: 40px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin-top: 40px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;

const FormIconImg = styled.img.attrs(props => ({
  image: props.image,
}))`
  &:hover {
    opacity: 1;
  }
  opacity: 0.2;
`;

const FormIconBox = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked {
    display: none;
  }
  &:checked + ${FormIconImg} {
    opacity: 1;
  }
`;

const FormIconText = styled.p`
  margin-top: 10px;
  text-align: center;
`;
