import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel(props) {
  return (
    <SlidCarousel {...settings}>
      {/* detail에서 사진 데이터 배열로 넘겨주면 imgBox자리에 props.carouselImg라고 넣을 예정 */}
      {IMGBOX.map(el => {
        return (
          <div key={el.id}>
            <CarouselImage src={el.path} />
          </div>
        );
      })}
    </SlidCarousel>
  );
}

export default Carousel;

const IMGBOX = [
  {
    id: 1,
    path: './images/test_1.jpg',
  },
  {
    id: 2,
    path: './images/test_2.jpg',
  },
  {
    id: 3,
    path: './images/test_3.jpg',
  },
  {
    id: 4,
    path: './images/test_4.jpg',
  },
];

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlidCarousel = styled(Slider)`
  .slick-prev {
    position: relative;
    z-index: 1;
    top: 320px;
    left: 20px;
    height: 0;
    color: white;
    opacity: 40%;
  }

  .slick-next {
    position: relative;
    left: 600px;
    bottom: 41px;
    height: 0;
    color: white;
    opacity: 40%;
  }
`;

const CarouselImage = styled.img`
  width: 640px;
  height: 360px;

  &:focus {
    outline: none;
  }
`;
