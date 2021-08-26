import React from 'react';
import styled from 'styled-components';
import ListContentLineBox from './ListContentLineBox';
import './MapPopContent.css';

function MapPopContent({ data }) {
  return (
    <MapWrap>
      <div className="close">닫기</div>
      <ListContentLineBox Listdata={data} />
    </MapWrap>
  );
}

export default MapPopContent;

const MapWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 20px);
  width: 300px;
  padding: 15px;
  transform: translateX(-50%);
  background: #fff;
`;
