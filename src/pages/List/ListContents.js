import React from 'react';
import styled from 'styled-components';
import ListCard from './ListCard';
import ListOption from './ListOption';

function ListContents({ productList, inputQuery }) {
  return (
    <ListContentWrap>
      <ListContentWidth>
        <ListOption inputQuery={inputQuery} />
        <Lists>
          {productList.map(data => {
            return <ListCard key={data.id} Listdata={data}></ListCard>;
          })}
        </Lists>
      </ListContentWidth>
    </ListContentWrap>
  );
}

export default ListContents;

const ListContentWrap = styled.div`
  padding-top: 50px;
  border-top: 1px solid #ddd;
  background: #f5f5f5;
`;

const ListContentWidth = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

const Lists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
