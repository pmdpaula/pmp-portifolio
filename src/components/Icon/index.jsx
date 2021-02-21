import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text/index';

const Icon = ({ icon, width, tag, href, color }) => (
  <Box width={width} style={{ margin: '0 .5em' }}>
    <Text
      as={tag}
      href={href}
      color={color}
      style={{ textShadow: 'rgba(0, 0, 0, 0.5)' }}
    >
      <FontAwesomeIcon icon={icon} />
    </Text>
  </Box>
);

export default Icon;
