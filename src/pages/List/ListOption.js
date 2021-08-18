import React, { useState } from 'react';
import styled from 'styled-components';

function ListOption({ inputQuery }) {
  const [clickedIndex, setClickedIndex] = useState(1);
  return (
    <ListOptions>
      <Select>
        {OPTIONS.map((option, index) => {
          return (
            <Option key={option.id} onClick={() => inputQuery(option.value)}>
              <OptionBtn
                onClick={() => setClickedIndex(index)}
                clicked={index}
                clickId={clickedIndex}
              >
                {option.text}
              </OptionBtn>
            </Option>
          );
        })}
      </Select>
    </ListOptions>
  );
}

export default ListOption;

const OPTIONS = [
  { id: 1, text: '베스트공간 순', value: { order: 'best' } },
  { id: 2, text: '가격 높은순', value: { order: 'desc' } },
  { id: 3, text: '가격 낮은순', value: { order: 'aesc' } },
];

const ListOptions = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
`;

const Select = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;

const Option = styled.li`
  padding: 0 15px;
`;

const OptionBtn = styled.button`
  position: relative;
  background: transparent;
  border: 0;
  padding: 0;
  color: #333;
  font-size: 18px;
  line-height: 1.3em;

  &:after {
    content: '';
    display: ${props => (props.clickId === props.clicked ? 'block' : 'none')};
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #6d3afb;
  }
`;
