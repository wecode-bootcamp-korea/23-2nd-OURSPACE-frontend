import React from 'react';
import styled from 'styled-components';
import ListContentLineBox from './ListContentLineBox';
import './MapPopContent.scss';

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
  bottom: calc(100% + 20px);
  left: 50%;
  width: 300px;
  transform: translateX(-50%);
  background: #fff;
  padding: 15px;
`;
