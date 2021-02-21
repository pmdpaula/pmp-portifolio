import styled, { css } from 'styled-components';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import breakpointsMedia from '../../theme/utils/breakpointsMedia';

import Icon from '../Icon/index';

const Footer = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <Icon
      width="3em"
      icon={faGithubAlt}
      color="background.main"
      tag="a"
      href="https://github.com/pmdpaula"
    />
    <Icon
      width="3em"
      icon={faLinkedin}
      color="background.main"
      tag="a"
      href="https://www.linkedin.com/in/pmdpaula/"
    />
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
  box-shadow: ${({ theme }) => theme.defaultStyles.boxShadow};
  max-height: 100px;
  ${breakpointsMedia({
    xs: css`
      min-height: 60px;
    `,
    md: css`
      min-height: 80px;
    `,
  })};
`;
