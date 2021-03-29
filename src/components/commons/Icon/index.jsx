import { PropTypes } from 'prop-types';

import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text/index';

const Icon = ({ icon, width, tag, href, color }) => (
  <Box width={width} style={{ margin: '0 .5em' }}>
    <Text
      as={tag}
      href={href}
      color={color}
      style={{ textShadow: 'rgba(0, 0, 0, 0.5)' }}
    >
      <icon />
    </Text>
  </Box>
);

export default Icon;

Icon.defaultProps = {
  tag: 'span',
  href: '',
};

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
  width: PropTypes.number.isRequired,
  href: PropTypes.string,
  color: PropTypes.string.isRequired,
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'p',
    'li',
    'a',
    'span',
    'ul',
  ]),
};
