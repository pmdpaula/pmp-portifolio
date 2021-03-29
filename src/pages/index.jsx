import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import FrontText from '../components/FrontText/FrontText';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';
// import { WebsitePageContext } from '../components/wrappers/WebsitePage';
import Box from '../foundation/layout/Box';
import Text from '../foundation/Text';

const Capa = () => {
  // const websitePageContext = useContext(WebsitePageContext);
  const { defaultStyles } = useContext(ThemeContext);

  return (
    <>
      <Box
        flex={1}
        display="flex"
        // flexWrap="wrap"
        // flexDirection="column"
        justifyContent="center"
        // alignItems="space-around"
        // style={{ zIndex: 200 }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={defaultStyles.contentWidth}
          style={{ zIndex: 200, height: '100vh' }}
        >
          <FrontText tag="span" variant="hugeTitle" textAlign="center">
            Pedro de Paula
          </FrontText>
          <Text
            tag="a"
            variant="title"
            color="background.secondary"
            textAlign="center"
            href="/projects"
          >
            PORTIFÓLIO
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default websitePageHOC(Capa, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    menuProps: {
      display: false,
    },
    footerProps: {
      display: false,
    },
    bgAnimationProps: {
      loop: true,
      numberOfBlocks: 50,
      duration: 3000,
      direction: 'alternate',
      easing: 'easeInOutBack',
      dispersion: 500,
    },
  },
});
