import { createGlobalStyle } from 'styled-components';
import '@fontsource/ubuntu';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #353535;
  }

  html,
  html * {
    cursor: none;
  }

  body {
    overflow-x: hidden;
  }
  
  * {
    cursor: pointer;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .movable {
    width: 44px;
    height: 44px;
    position: absolute;
    z-index: 888;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: background 0.5s;
  }

  .movable.active {
    background: red;
  }

  .movable.active:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .movable.cursor-pointer:after {
    content: "he";
  }

  .movable.cursor-right:after {
    content: ">";
  }

  .movable.cursor-left:after {
    content: "<";
  }
`;
