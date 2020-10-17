import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './settings/globalStyle';
import App from './app'

ReactDOM.render(
  <GlobalStyle>
    <App />
  </GlobalStyle>
,
  document.getElementById('root')
);

