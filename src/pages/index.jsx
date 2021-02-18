import styled, { ThemeContext  } from 'styled-components';
import { useContext } from 'react';

import { Text } from '../foundation/Text';
import { Box } from '../foundation/layout/Box';
import { Grid } from '../foundation/layout/Grid';

import BackgroundAnimation from '../components/BackgroundAnimation';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import FrontText from '../components/FrontText/FrontText';


export default function Home() {

  return (
    <>
      <BackgroundAnimation />
      <Box
        flex={1}
        display='flex'
        flexWrap='wrap'
        flexDirection="column"
        justifyContent="space-between"
        style={{zIndex: 1000}}
      >
      <Box
        display='flex'
        // flexWrap='wrap'
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <FrontText tag="span" variant="hugeTitle" textAlign='center'>Pedro de Paula</FrontText>
        <Text tag="a" variant="title" color="background.secondary" textAlign='center' href="/projects">PORTIFÓLIO</Text>

      </Box>
        {/* <Menu /> */}
        {/* <FrontText
          tag="h1"
          variant="hugeTitle"
        >
          Pedro de Paula
        </FrontText> */}
        <Footer />
      </Box>
    </>
  )
}
