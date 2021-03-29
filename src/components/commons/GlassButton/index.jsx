import { PropTypes } from 'prop-types';

import { Btn } from './styles/index';
// import Link from '../Link/index';

// https://youtu.be/YrOq7OpRV8I

const GlassButton = ({
  href,
  children,
  setIsModalState,
  isModalOpen,
  otherColor,
}) => {
  const isLink = Boolean(href);
  // const componentTag = isLink ? Link : 'button';

  return (
    <Btn otherColor={otherColor}>
      {isLink ? (
        <Btn.Link href={href}>{children}</Btn.Link>
      ) : (
        <Btn.NotLink
          onClick={() => {
            setIsModalState(!isModalOpen); // novo state sendo atribuido
          }}
        >
          {children}
        </Btn.NotLink>
      )}
    </Btn>
  );
};

export default GlassButton;

GlassButton.defaultProps = {
  href: null,
  setIsModalState: null,
  isModalOpen: null,
  otherColor: 'rgba(0, 255, 0, 1)',
};

GlassButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  setIsModalState: PropTypes.func,
  isModalOpen: PropTypes.bool,
  otherColor: PropTypes.string,
};
