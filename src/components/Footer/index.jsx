import styled, { css } from 'styled-components';
import Box from '../../foundation/layout/Box';
import Logo from '../../theme/Logo';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

const footerHeight = 80;

const Footer = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <p>Portifólio de projetos executados por mim</p>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  padding: 14px 28px;
  margin: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  /* height: ${footerHeight}px; */
  /* height: 50px; */
  /* min-width: 95vw; */
  background: ${({ theme }) => theme.colors.background.secondary.color};
  opacity: 0.8;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  /* align-self: flex-end; */
  /* flex-shrink: 0; */
  ${breakpointsMedia({
    xs: css`
      /* width: 50px; */
      height: 60px;
    `,
    md: css`
      /* width: 131px; */
      height: 80px;
    `,
  })}

  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.text.head1.color};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;
