import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
// import Tooltip from '@material-ui/core/Tooltip';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ReactTooltip from 'react-tooltip';

import * as FaIcons from 'react-icons/fa';

import Logo from '../../theme/Logo';
// import { GitHub, Linkedin } from '../../assets/logos';

import Box from '../../foundation/layout/Box';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import GlassButton from '../GlassButton';
import NeumorphicButton from '../NeumorphicButton';
import Text from '../../foundation/Text';
// import Icon from '../Icon';
// import { GitHub } from '../../assets/logos/GitHub';
// import { Linkedin } from '../../assets/logos/LinkedIn';
import Icon from '../Icon/index';

// const tema = createMuiTheme({
//   overrides: {
//     // Style sheet name ⚛️
//     MuiTooltip: {
//       // Name of the rule
//       tooltipArrow: {
//         // Some CSS
//         color: 'red',
//       },
//       tooltip: {
//         // Some CSS
//         color: 'red',
//       },
//     },
//   },
// });

const Footer = props => {
  const { colors, title } = useContext(ThemeContext);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <ReactTooltip
        type={title === 'dark' ? 'light' : 'dark'}
        effect="solid"
        delayHide={300}
        border
        borderColor={colors.borders.main.color}
        arrowColor={colors.borders.main.color}
      />
      <Text
        color="background.main"
        tag="a"
        href="https://github.com/pmdpaula"
        variant="title"
        style={{ padding: '0 9px' }}
      >
        <span data-tip="GitHub">
          <FaIcons.FaGithubAlt />
        </span>
      </Text>

      <span>
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
      </span>
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
  opacity: 0.8;
  box-shadow: ${({ theme }) => theme.defaultStyles.boxShadow};
  max-height: 100px;
  /* box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25); */
  /* align-self: flex-end; */ /* flex-shrink: 0; */
  ${breakpointsMedia({
    xs: css`
      /* width: 50px; */
      min-height: 60px;
    `,
    md: css`
      /* width: 131px; */
      min-height: 80px;
    `,
  })};
`;
