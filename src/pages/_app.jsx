/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { PropTypes } from 'prop-types';

import GlobalStyle from '../theme/GlobalStyle';
import ThemeLight from '../theme/light';
import ThemeDark from '../theme/dark';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(ThemeDark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
