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
  width: 33.333333%;
  padding: 10px;
`;
