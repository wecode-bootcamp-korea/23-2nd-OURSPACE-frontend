import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel(props) {
  const handleImage = (() => {
    const { images } = props;
    let imageList;
    if (images !== undefined) {
      imageList = images;
    } else {
      imageList = [];
    }
    return imageList;
  })();

  const imgBox = [
    {
      id: 1,
      path: handleImage[0],
    },
    {
      id: 2,
      path: handleImage[1],
    },
    {
      id: 3,
      path: handleImage[2],
    },
  ];

  return (
    <Slider {...settings}>
      {imgBox.map(el => {
        return (
          <div key={el.id}>
            <CarouselImage src={el.path} />
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
};

const CarouselImage = styled.img`
  width: 773px;

  &:focus {
    outline: none;
  }
`;
