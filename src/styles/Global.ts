import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    -webkit-font-smoothing: antialiased;

  }

  body {
    /* background: #312e38; */
    background: #FCF8F8;
    color: #FCF8F8;
    position: relative;
  }
`;
