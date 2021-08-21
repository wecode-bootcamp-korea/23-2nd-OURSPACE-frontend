import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import ListImgeSlider from './ListImgeSlider';
import 'slick-carousel/slick/slick.css';

function ListContentLineBox({ Listdata }) {
  const { title, district, price, max_count, image, id } = Listdata;
  let history = useHistory();
  const goToDetail = () => {
    history.push({
      pathname: `/spaces/detail/${id}`,
      state: { id: id },
    });
  };
  return (
    <ListContentLine onClick={goToDetail}>
      <div className="listImages">
        <Slider {...SLIDER_SETTING}>
          {image.map((img, index) => {
            return (
              <ListImgeSlider
                key={index}
                img={img}
                alt={title}
                onClick={goToDetail}
              />
            );
          })}
        </Slider>
      </div>
      <ListTitle>
        <Title>
          <h3>{title}</h3>
          <p>{district}</p>
        </Title>
        <Content>
          <h4>{Number(price).toLocaleString()}원</h4>
          <p>최대 {max_count}인</p>
        </Content>
      </ListTitle>
    </ListContentLine>
  );
}

export default ListContentLineBox;

const SLIDER_SETTING = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ListContentLine = styled.a`
  display: block;
  border: 1px solid #ddd;
  z-index: 999;
`;

const ListTitle = styled.div`
  padding: 15px;
  background: #fff;
`;

const Title = styled.div`
  margin-bottom: 8px;

  h3 {
    color: #333;
    font-size: 19px;
    line-height: 1.4em;
    letter-spacing: -0.01em;
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    color: #555;
    font-size: 16px;
    line-height: 1.3em;
    padding-left: 15px;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 4px;
      left: 0;
      width: 10px;
      height: 15px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 0;
      background-image: url('/images/location.png');
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    color: #6d3afb;
    font-size: 21px;
    line-height: 1.3em;
    font-weight: 500;
  }

  p {
    color: #555;
    font-size: 14px;
    line-height: 1.3em;
  }
`;
