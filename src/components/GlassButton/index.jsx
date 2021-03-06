import { PropTypes } from 'prop-types';
import { Btn } from './styles/index';

// https://youtu.be/YrOq7OpRV8I

const GlassButton = ({ href, children }) => (
  <Btn>
    <Btn.Link href={href}>{children}</Btn.Link>
  </Btn>
);

export default GlassButton;

GlassButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
