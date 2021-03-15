import React from 'react';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

function LoginScreen() {
  return <div>Página de Login</div>;
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
