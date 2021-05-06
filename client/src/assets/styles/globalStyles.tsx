import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';
// import '../fonts/stylesheet.css';


export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "SBSansText-Regular", "SB Sans", "SB Sans Display", 'OpenSanc', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #333333;
    background: white;
    -webkit-overflow-scrolling: touch;
  }

  ol, ul {
    list-style: none;
  }

  p, ul, li {
    margin: 0;
    padding: 0;
  }

  input,
  button,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border: 0;
    background-color: transparent;

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;

    &:disabled {
      cursor: initial;
    }
  }

  a {
    text-decoration: none;
  }

`;


