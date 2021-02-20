import styled, { css } from 'styled-components';
import Box from '../../foundation/layout/Box';
import Logo from '../../theme/Logo';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import GlassButton from '../GlassButton';
import NeumorphicButton from '../NeumorphicButton';

const Footer = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <NeumorphicButton href="/about">Sobre mim</NeumorphicButton>{' '}
    {/* <GlassButton href="/">Home</GlassButton> */}
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  padding: 8px 28px;
  margin: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  /* max-width: 95vw; */

  background: ${({ theme }) => theme.colors.background.secondary.color};
  opacity: 0.8;
  box-shadow: ${({ theme }) => theme.defaultStyles.boxShadow}
  /* box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25); */
  /* align-self: flex-end; */
  flex-shrink: 0;
  ${breakpointsMedia({
    xs: css`
      /* width: 50px; */
      min-height: 60px;
    `,
    md: css`
      /* width: 131px; */
      min-height: 80px;
    `,
  })}
`;
