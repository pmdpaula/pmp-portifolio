import styled, { ThemeContext  } from 'styled-components';
import { useContext } from 'react';

import { Text } from '../foundation/Text';
import { Box } from '../foundation/layout/Box';
import { Grid } from '../foundation/layout/Grid';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation/index';


export default function Home() {
  // const { colors, title, defaultStyles } = useContext(ThemeContext);

  return (
    <>
      {/* <BackgroundAnimation /> */}
      <Box
        flex={1}
        display='flex'
        flexWrap='wrap'
        flexDirection="column"
        justifyContent="space-between"
        style={{zIndex: 1000}}
      >
        <Menu />
        <Grid.Col
          display='flex'
          justifyContent='center'
          alignItems='center'

        >
          <Grid.Row>
            <Text tag="p" variant="title" >Fundo Animado</Text>

          </Grid.Row>

        </Grid.Col>
        <Footer />
      </Box>
    </>
  )
}
