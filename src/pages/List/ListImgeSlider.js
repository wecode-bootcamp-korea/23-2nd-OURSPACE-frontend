import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';

function ListImgeSlider(props) {
  return (
    <Image>
      <ListThumb>
        <Img>
          <img alt={props.alt} src={props.img} />
        </Img>
      </ListThumb>
    </Image>
  );
}

export default ListImgeSlider;

const Image = styled.div`
  display: block;
`;

const ListThumb = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
`;

const Img = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: 0.3s ease-in-out;

  img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

// const ListTitle = styled.div`
//   padding: 15px;
//   background: #fff;
// `;

// const Title = styled.div`
//   margin-bottom: 8px;

//   h3 {
//     color: #333;
//     font-size: 19px;
//     line-height: 1.4em;
//     letter-spacing: -0.01em;
//     font-weight: 500;
//     margin-bottom: 8px;
//   }

//   p {
//     color: #555;
//     font-size: 16px;
//     line-height: 1.3em;
//     padding-left: 15px;
//     position: relative;

//     &:before {
//       content: '';
//       display: block;
//       position: absolute;
//       top: 4px;
//       left: 0;
//       width: 10px;
//       height: 15px;
//       background-size: 100% 100%;
//       background-repeat: no-repeat;
//       background-position: 0;
//       background-image: url('/images/location.png');
//     }
//   }
// `;

// const Content = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   h4 {
//     color: #6d3afb;
//     font-size: 21px;
//     line-height: 1.3em;
//     font-weight: 500;
//   }

//   p {
//     color: #555;
//     font-size: 14px;
//     line-height: 1.3em;
//   }
// `;
