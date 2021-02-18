import Text from '../foundation/Text';
import Box from '../foundation/layout/Box';
import FrontText from '../components/FrontText/FrontText';

import BackgroundAnimation from '../components/BackgroundAnimation';
import Footer from '../components/Footer';

const Capa = () => (
  <>
    <BackgroundAnimation
      numberOfBlocks={50}
      duration={5000}
      direction="alternate"
    />
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      style={{ zIndex: 1000 }}
    >
      <Box
        display="flex"
        // flexWrap='wrap'
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
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

      <Footer />
    </Box>
  </>
);

export default Capa;
