import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeFoundationNext } from '@zillow/constellation';
import GlobalStyle from './GlobalStyle';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <ThemeProvider theme={ThemeFoundationNext}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
