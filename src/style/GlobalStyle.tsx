import { createGlobalStyle } from "styled-components";
import LineSeedThin from '/assets/fonts/LINESeedKR-Th.woff2';
import LineSeedRegular from '/assets/fonts/LINESeedKR-Rg.woff2';
import LineSeedBold from '/assets/fonts/LINESeedKR-Bd.woff2';
import NexonFootballGothicLight from '/assets/fonts/NEXONFootballGothicL.otf';
import NexonFootballGothicBold from '/assets/fonts/NEXONFootballGothicB.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
    }

    @font-face {
      font-family: 'NexonFootballGothic-Light';
      src: url(${NexonFootballGothicLight}) format('truetype');
      font-display: swap;
      font-weight: 300;
    }
    @font-face {
      font-family: 'NexonFootballGothic-Bold';
      src: url(${NexonFootballGothicBold}) format('truetype');
      font-display: swap;
      font-weight: 700;
    }

    @font-face {
    font-family: 'LineSeed-Thin';
    src: url(${LineSeedThin}) format('truetype');
    font-display: swap;
    font-weight: 100;
    }
    @font-face {
    font-family: 'LineSeed-Regular';
    src: url(${LineSeedRegular}) format('truetype');
    font-display: swap;
    font-weight: 400;
    }
    @font-face {
    font-family: 'LineSeed-Bold';
    src: url(${LineSeedBold}) format('truetype');
    font-display: swap;
    font-weight: 700;
    }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Gmarket Sans;
    line-height: normal;
  }
`;

export default GlobalStyle;