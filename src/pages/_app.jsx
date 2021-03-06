/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Head from 'next/head';

import { PropTypes } from 'prop-types';
import GlobalStyle from '../theme/GlobalStyle';
import ThemeLight from '../theme/light';
import ThemeDark from '../theme/dark';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(ThemeDark);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE_PAGE}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
