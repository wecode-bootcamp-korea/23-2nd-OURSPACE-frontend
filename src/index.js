import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

// const { Kakao } = window;
// Kakao.init(process.env.REACT_APP_KAKAO_API);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
