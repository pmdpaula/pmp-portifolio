/* eslint-disable react/prop-types */
import { PropTypes } from 'prop-types';
import { StructuredText } from 'react-datocms';

import Box from '../../../foundation/layout/Box/index';
import Grid from '../../../foundation/layout/Grid/index';
import Text from '../../../foundation/Text/index';
import Square from '../../commons/Square/index';

export { getContent } from './getContent';

const AboutScreen = ({ messages }) => (
  <>
    <Box
      flex={1}
      display="flex"
      // flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid.Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex={1}
        zIndex={1}
      >
        {/* <Square value={({ sm: 12 }, { md: 9 })} offset={{ md: 1 }}>
            <pre>{JSON.stringify(messages, null, 4)}</pre>
          </Square> */}
        <Square value={({ sm: 12 }, { md: 9 })} offset={{ md: 1 }}>
          <Text tag="p" variant="title">
            {messages.introductionTitle}
          </Text>
          <Text tag="p" variant="subTitle">
            {messages.introductionSubtitle}
          </Text>
          <Text tag="p" variant="paragraph1" textAlign="justify">
            {messages.introductionText}{' '}
          </Text>
        </Square>
        <Square value={({ sm: 12 }, { md: 9 })} offset={{ md: 1 }}>
          <Text tag="p" variant="subTitle">
            {messages.block1Head}
          </Text>
          <Text tag="p" variant="paragraph1" textAlign="justify">
            {messages.block1Text}
          </Text>
        </Square>
        <Square value={({ sm: 12 }, { md: 9 })} offset={{ md: 1 }}>
          <Text tag="p" variant="subTitle">
            {messages.block2Head}
          </Text>
          <Text
            tag="ul"
            variant="paragraph1"
            textAlign="justify"
            // dangerouslySetInnerHTML={{
            //   __html: messages.block2Text,
            // }}
          >
            <StructuredText data={messages.block2Text} />
          </Text>
        </Square>
      </Grid.Container>
    </Box>
  </>
);
export default AboutScreen;

AboutScreen.propType = {
  messages: PropTypes.object.isRequired,
};
