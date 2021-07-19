import { createGlobalStyle } from 'styled-components';
import '@fontsource/ubuntu';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #353535;
  }

  * {
    cursor: none;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
