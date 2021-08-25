/*global kakao*/
import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import MapPopContent from './MapPopContent';

function MapList({ queryState, areaData, productList }) {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const areaCenter = areaData.district.filter(
      area => area.id === queryState.district
    );

    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(
        areaCenter[0].lattitude,
        areaCenter[0].longitude
      ),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);

    const addEventHandle = (target, type, callback) => {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
        return;
      }
    };

    const geocoder = new kakao.maps.services.Geocoder();
    productList.forEach(mapData => {
      geocoder.addressSearch(mapData.address, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          let position = coords;

          const marker = document.createElement('div');
          marker.textContent = `${Number(mapData.price).toLocaleString()}원`;
          Object.assign(marker.style, {
            backgroundColor: '#6d3afb',
            borderRadius: '30px',
            padding: '8px',
            fontSize: '14px',
            color: '#fff',
          });

          const customOverlay = new kakao.maps.CustomOverlay({
            position,
            content: marker,
            clickable: true,
          });

          const handleOpenOverlay = () => {
            clickedCustomOverlay.setMap(map);
          };

          const handleCloseOverlay = () => {
            clickedCustomOverlay.setMap(null);
          };

          const container = document.createElement('div');
          container.innerHTML = ReactDOMServer.renderToString(
            <MapPopContent data={mapData} />
          );

          const closeButton = container.querySelector('.close');
          closeButton.addEventListener('click', handleCloseOverlay);

          const clickedCustomOverlay = new kakao.maps.CustomOverlay({
            position,
            content: container,
            clikable: true,
          });

          addEventHandle(marker, 'click', handleOpenOverlay);

          customOverlay.setMap(map);
        }
      });
    });
  };
  return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
}

export default MapList;
