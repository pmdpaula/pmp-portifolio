import PropTypes from 'prop-types';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

// import theme from '../../../../theme';
// import themeLight from '../../../../theme/light';
import themeDark from '../../../../theme/dark';
import GlobalStyle from '../../../../theme/GlobalStyle';

export default function WebsiteGlobalProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState(themeDark);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
