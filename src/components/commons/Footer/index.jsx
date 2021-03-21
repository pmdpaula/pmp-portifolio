import { useContext, useEffect, useState } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import ReactTooltip from 'react-tooltip';

import * as FaIcons from 'react-icons/fa';

import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../../foundation/Text';

const Footer = props => {
  const [isMounted, setIsMounted] = useState(false);

  const { colors, title } = useContext(ThemeContext);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      {isMounted && (
        <ReactTooltip
          type={title === 'dark' ? 'light' : 'dark'}
          effect="solid"
          delayHide={300}
          border
          borderColor={colors.borders.main.color}
          arrowColor={colors.borders.main.color}
        />
      )}
      <Text
        color="background.main"
        tag="a"
        href="https://github.com/pmdpaula"
        variant="title"
        style={{ padding: '0 9px' }}
        data-tip="GitHub"
      >
        <FaIcons.FaGithubAlt />
      </Text>

      <Text
        color="background.main"
        tag="a"
        href="https://www.linkedin.com/in/pmdpaula/"
        variant="title"
        style={{ padding: '0 9px' }}
        data-tip="LinkedIn"
      >
        <FaIcons.FaLinkedin />
      </Text>
    </FooterWrapper>
  );
};

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
  opacity: ${props => (props.show ? '0.8' : '0')};
  pointer-events: ${props => !props.show && 'none'};
  // opacity: 0.8;
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
