import Logo from '../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';
import NeumorphicButton from '../NeumorphicButton';
import GlassButton from '../GlassButton';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {' '}
        {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {' '}
        {/* MenuWrapper.CentralSide */}
        {[
          { url: '/', name: 'Home' },
          { url: '/projects', name: 'Projetos' },
          { url: '/about', name: 'Sobre' },
          // { url: '/contact', name: 'Contato' },
          // { url: '/contact1', name: 'Contato' },
        ].map(link => (
          // <NeumorphicButton key={link.url} href={link.url} marginRight="12px">
          //   {link.name}
          // </NeumorphicButton>
          <GlassButton key={link.url} href={link.url}>
            {link.name}
          </GlassButton>
          // <li key={link.url}>
          //   <Text variant="smallestException" tag="a" href={link.url}>
          //     {link.name}
          //   </Text>
          // </li>
        ))}
      </MenuWrapper.CentralSide>
      {/* <MenuWrapper.RightSide /> */}
    </MenuWrapper>
  );
}
