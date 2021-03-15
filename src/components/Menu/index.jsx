import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import MenuWrapper from './styles/MenuWrapper';

import GlassButton from '../GlassButton';
import FrontText from '../FrontText/FrontText';
import FormCadastro from '../patterns/FormCadastro/index';
import Modal from '../Modal/index';

const Menu = () => {
  const [isModalOpen, setIsModalState] = useState(false);

  const { colors } = useContext(ThemeContext);

  return (
    <header>
      {/*
        [SOLID]
        S = Single Responsability
        O = Open Closed
        L = Liskov Substitution
        I = Interface Segregation
        D = Dependency Inversion
      */}
      {/* {isModalOpen && <Modal />} */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalState(false);
        }}
      >
        {propsDoModal => <FormCadastro propsDoModal={propsDoModal} />}
      </Modal>

      <MenuWrapper>
        <MenuWrapper.LeftSide>
          {' '}
          <FrontText tag="span" variant="subTitle" textAlign="center">
            Pedro de Paula
          </FrontText>
        </MenuWrapper.LeftSide>
        <MenuWrapper.CentralSide>
          {[
            { url: '/', name: 'Home' },
            { url: '/projects', name: 'Projetos' },
            { url: '/about', name: 'Sobre' },
          ].map(link => (
            <GlassButton key={link.url} href={link.url}>
              {link.name}
            </GlassButton>
          ))}
          <GlassButton
            key="modal_cadastro"
            setIsModalState={setIsModalState}
            isModalOpen={isModalOpen}
            otherColor={colors.secondary.main.color}
          >
            Cadastro
          </GlassButton>
        </MenuWrapper.CentralSide>
        {/* <MenuWrapper.RightSide /> */}
      </MenuWrapper>
    </header>
  );
};

export default Menu;
