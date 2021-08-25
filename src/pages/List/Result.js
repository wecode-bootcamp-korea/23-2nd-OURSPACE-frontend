import styled from 'styled-components';

function Result({ categoryText }) {
  return (
    <ResultContent>
      <span>{categoryText}</span>(으)로 검색한 결과입니다.
    </ResultContent>
  );
}

export default Result;

const ResultContent = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  line-height: 1.3em;
  letter-spacing: 0.02em;
  margin-bottom: 45px;

  span {
    color: #6d3afb;
    text-decoration: underline;
  }
`;
