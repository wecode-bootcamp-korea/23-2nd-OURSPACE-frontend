import React from 'react';
import styled from 'styled-components';
import ListContentLineBox from './ListContentLineBox';

function ListCard({ Listdata }) {
  return (
    <ListBox>
      <ListContentLineBox Listdata={Listdata} />
    </ListBox>
  );
}

export default ListCard;

const ListBox = styled.li`
  padding: 10px;
  width: 33.333333%;
`;
