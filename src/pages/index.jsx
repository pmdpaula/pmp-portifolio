import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

import Text from '../foundation/Text';
// import { WebsitePageContext } from '../components/wrappers/WebsitePage';
import Box from '../foundation/layout/Box';

import FrontText from '../components/FrontText/FrontText';

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
        style={{ zIndex: 1000 }}
      >
        <Box
          display="flex"
          // flexWrap='wrap'
          justifyContent="center"
          // alignItems="center"
          flexDirection="column"
          maxWidth={defaultStyles.contentWidth}
          style={{ zIndex: 1000 }}
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

        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default websitePageHOC(Capa, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
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
