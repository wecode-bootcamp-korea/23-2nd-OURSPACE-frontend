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
    //productList.forEach(el => {
    MAP_DATA.forEach(mapData => {
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

const MAP_DATA = [
  {
    address: '서울 강남구 봉은사로43길 49',
    district: '강남',
    id: 1,
    image: [
      ('https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/TIL.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/sk.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/travel.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/weeteweete.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/1.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/2.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/3.jpg'),
    ],
    like: 30,
    mainimage:
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/image1.jpeg',
    max_count: 30,
    price: '2000.00',
    sub_title: '서울역, 느낌있는 공간 스튜디오 서울각입니다:)',
    title: '녹음실1',
  },
  {
    address: '서울 강남구 강남대로154길 38 지하1층',
    district: '강남',
    id: 2,
    image: [
      ('https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/TIL.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/sk.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/travel.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/weeteweete.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/1.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/2.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/3.jpg'),
    ],
    like: 30,
    mainimage:
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/image1.jpeg',
    max_count: 30,
    price: '5000.00',
    sub_title: '서울역, 느낌있는 공간 스튜디오 서울각입니다:)',
    title: '녹음실2',
  },
  {
    address: '서울 강남구 선릉로132길 57 2층',
    district: '강남',
    id: 3,
    image: [
      ('https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/TIL.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/sk.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/travel.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/weeteweete.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/1.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/2.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/3.jpg'),
    ],
    like: 30,
    mainimage:
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/image1.jpeg',
    max_count: 30,
    price: '5000.00',
    sub_title: '서울역, 느낌있는 공간 스튜디오 서울각입니다:)',
    title: '녹음실3',
  },
  {
    address: '서울 강남구 학동로42길 59',
    district: '강남',
    id: 4,
    image: [
      ('https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/TIL.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/sk.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/travel.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/weeteweete.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/1.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/2.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/3.jpg'),
    ],
    like: 30,
    mainimage:
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/image1.jpeg',
    max_count: 30,
    price: '8000.00',
    sub_title: '서울역, 느낌있는 공간 스튜디오 서울각입니다:)',
    title: '녹음실4',
  },
  {
    address: '서울 강남구 도산대로54길 48-19',
    district: '강남',
    id: 1,
    image: [
      ('https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/TIL.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/sk.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/travel.png',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/weeteweete.jpeg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/ddd',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/1.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/2.jpg',
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/image/3.jpg'),
    ],
    like: 30,
    mainimage:
      'https://ourspace-js.s3.ap-northeast-2.amazonaws.com/static/images/image1.jpeg',
    max_count: 30,
    price: '9000.00',
    sub_title: '서울역, 느낌있는 공간 스튜디오 서울각입니다:)',
    title: '녹음실5',
  },
];
