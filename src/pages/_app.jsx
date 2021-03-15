/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';

import Head from 'next/head';
import GlobalStyle from '../theme/GlobalStyle';
import ThemeLight from '../theme/light';
import ThemeDark from '../theme/dark';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(ThemeDark);

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE_PAGE}</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portifolio-pmdpaula.vercel.app/"
        />
        <meta property="og:title" content="Portifólio de Pedro de Paula" />
        <meta
          property="og:description"
          content="Portifólio de projetos em programação de Pedro Machado de Paula"
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://portifolio-pmdpaula.vercel.app/"
        />
        <meta property="twitter:title" content="Portifólio de Pedro de Paula" />
        <meta
          property="twitter:description"
          content="Portifólio de projetos em programação de Pedro Machado de Paula"
        />
        <meta property="twitter:image" content="/images/seo.jpg" />
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
