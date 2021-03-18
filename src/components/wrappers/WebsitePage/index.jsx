import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';
import BackgroundAnimation from '../../commons/BackgroundAnimation';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  // pageBoxProps,
  bgAnimationProps,
  menuProps,
}) {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        teste: true,
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />

      <BackgroundAnimation
        numberOfBlocks={bgAnimationProps.numberOfBlocks}
        duration={bgAnimationProps.duration}
        direction={bgAnimationProps.direction}
        easing={bgAnimationProps.easing}
        dispersion={bgAnimationProps.dispersion}
        loop={bgAnimationProps.loop}
        opacity={bgAnimationProps.opacity}
        // style={{ zindex: -1000 }}
      />
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        // style={{ zindex: bgAnimationProps.numberOfBlocks + 10 }}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {propsDoModal => <FormCadastro propsDoModal={propsDoModal} />}
        </Modal>
        {menuProps.display && (
          <Menu onCadastrarClick={() => setModalState(true)} />
        )}
        <main>{children}</main>
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  bgAnimationProps: {
    numberOfBlocks: 30,
    duration: 20,
    direction: 'normal',
    easing: 'linear',
    dispersion: 400,
    loop: false,
    opacity: 1,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  bgAnimationProps: PropTypes.shape({
    numberOfBlocks: PropTypes.number,
    duration: PropTypes.number,
    direction: PropTypes.string,
    easing: PropTypes.string,
    dispersion: PropTypes.number,
    loop: PropTypes.bool,
    opacity: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
};
