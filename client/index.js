import theme from './theme';
import {StoreProvider} from './Store/StoreProvider';
import Example from './Example/Example';
import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import './style.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <Example />
    </StoreProvider>
  </ThemeProvider>, document.querySelector('#root'));