import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  ::-moz-focus-inner {border:0;}
`;

/** @component */
export default GlobalStyle;
