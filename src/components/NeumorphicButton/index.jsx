/* eslint-disable indent */
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import propToStyle from '../../theme/utils/propToStyle';

// https://youtu.be/uNjfslp6Qnc

const NeumorphicButton = ({ href, ...props }) => (
  <NeumButton href={href}>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </NeumButton>
);

export default NeumorphicButton;

const borderXs = '10px';
const borderMd = '20px';

const NeumButton = styled.a`
  position: relative;
  /* ${propToStyle('marginRight')} */

  ${breakpointsMedia({
    xs: css`
      padding: 8px 18px;
      border-radius: ${borderXs};
    `,
    md: css`
      padding: 15px 30px;
      border-radius: ${borderMd};
    `,
  })}

  color: ${({ theme }) => theme.colors.text.main.color};
  font-weight: 600;
  letter-spacing: 1px;
  overflow: hidden;
  /* background: rgba(255, 255, 255, 0.1); */
  background: linear-gradient(
    -20deg,
    #000 0%,
    ${({ theme }) => theme.colors.background.secondary.color} 30%,
    #000 70%,
    ${({ theme }) => theme.colors.background.secondary.color} 100%
  );

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);

    ${breakpointsMedia({
      xs: css`
        border-top-left-radius: ${borderXs};
        border-bottom-left-radius: ${borderXs};
      `,
      md: css`
        border-top-left-radius: ${borderMd};
        border-bottom-left-radius: ${borderMd};
      `,
    })}
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s;
    ${breakpointsMedia({
      xs: css`
        border-top-left-radius: ${borderXs};
        border-bottom-left-radius: ${borderXs};
      `,
      md: css`
        border-top-left-radius: ${borderMd};
        border-bottom-left-radius: ${borderMd};
      `,
    })}
  }

  :hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

    ::after {
      left: 100%;
    }
  }
`;

NeumorphicButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
