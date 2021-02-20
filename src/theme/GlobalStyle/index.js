import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}

  html {
    font-size: 62.5%;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.defaultStyles.fontFamily};
    color: ${({ theme }) => theme.colors.text.main.color};
    background-color: ${({ theme }) => theme.colors.background.main.color};
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  /* Full height layout */
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
