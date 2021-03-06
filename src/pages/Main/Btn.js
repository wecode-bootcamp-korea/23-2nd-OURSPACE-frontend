import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function BtnImage(props) {
  const { id, text } = props;
  const history = useHistory();
  return (
    <BtnImages
      onClick={() =>
        history.push({
          pathname: `/list?category=${props.id}`,
          state: { category: id, categoryText: text },
        })
      }
    >
      <Button>
        <MainImage {...props} />
        <Text>{text}</Text>
      </Button>
    </BtnImages>
  );
}

export default BtnImage;

const BtnImages = styled.div`
  display: inline-block;
  margin-top: 50px;
  text-align: center;
`;

const Button = styled.button`
  padding: 0;
  color: inherit;
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Text = styled.div`
  margin-top: 16px;
  font-size: 18px;
`;

const MainImage = styled.img.attrs(props => ({
  src: props.src,
}))``;
