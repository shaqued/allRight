import theme from './theme';
import { StoreProvider } from './Store/StoreProvider';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './style.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ThemeProvider>, document.querySelector('#root'));