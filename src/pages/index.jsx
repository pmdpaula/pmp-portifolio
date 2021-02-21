import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Text from '../foundation/Text';
import Box from '../foundation/layout/Box';
import FrontText from '../components/FrontText/FrontText';

import BackgroundAnimation from '../components/BackgroundAnimation';

const Capa = () => {
  const { defaultStyles } = useContext(ThemeContext);

  return (
    <>
      <BackgroundAnimation
        numberOfBlocks={50}
        duration={3000}
        direction="alternate"
        loop
        easing="easeInOutBack"
        dispersion={500}
      />
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

export default Capa;