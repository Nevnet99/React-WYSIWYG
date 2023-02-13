// global styles for the app styled components

import pico from '@picocss/pico';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${pico}
  ${reset}
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 80%;
    font-family: ${({ theme: { font } }) => font.family};

    ${({ theme }) => theme.minBp('tablet')} {
        font-size: 55%;
    }

    ${({ theme }) => theme.minBp('desktop')} {
        font-size: 16px;
    }
  }
  `;

export default GlobalStyles;
