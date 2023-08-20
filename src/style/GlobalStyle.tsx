import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Gmarket Sans;
    line-height: normal;
  }
`;

export default GlobalStyle;