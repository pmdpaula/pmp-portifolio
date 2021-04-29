/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const Btn = styled.div`
  position: relative;
  /* min-width: 60px; */
  /* height: 50px; */
  margin: 4px;
  padding: 18px;

  :hover {
    ::before {
      left: -20%;
      bottom: 5px;
      height: 50%;
      /* width: 200%; */
      width: 100%;
      ${breakpointsMedia({
        sm: css`
          left: -50%;
          width: 180%;
        `,
        // md: css`
        //   /* left: 20%; */
        //   width: 200%;
        // `,
        lg: css`
          left: -20%;
          width: 200%;
        `,
      })}
      border-radius: 30px;
      background: ${props => props.otherColor};
      transition-delay: 0.3s;
    }

    ::after {
      top: 5px;
      left: -20%;
      height: 50%;
      width: 100%;
      ${breakpointsMedia({
        sm: css`
          left: -50%;
          width: 180%;
        `,
        lg: css`
          left: -20%;
          width: 200%;
        `,
      })}
      border-radius: 30px;
      background: ${props => props.otherColor};
      transition-delay: 0.3s;
    }
  }

  ::before {
    filter: blur(5px);
    content: '';
    position: absolute;
    left: 10%;
    transform: translate(50%);
    bottom: -3px;
    width: 70%;
    ${breakpointsMedia({
      sm: css`
        left: 30%;
        width: 100%;
      `,
      md: css`
        bottom: -6px;
      `,
      lg: css`
        left: 50%;
        width: 120%;
      `,
    })}

    height: 10px;
    background: rgba(0, 100, 0, 0.3);
    box-shadow: 0 0 5px ${props => props.otherColor},
      0 0 15px ${props => props.otherColor},
      0 0 30px ${props => props.otherColor},
      0 0 60px ${props => props.otherColor};
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }

  ::after {
    filter: blur(5px);
    content: '';
    position: absolute;
    left: 10%;
    transform: translate(50%);
    top: -3px;
    width: 70%;
    ${breakpointsMedia({
      sm: css`
        left: 30%;
        width: 100%;
      `,
      md: css`
        top: -4px;
      `,
      lg: css`
        left: 50%;
        width: 120%;
      `,
    })}
    height: 10px;
    background: rgba(0, 100, 0, 0.3);
    box-shadow: 0 0 5px ${props => props.otherColor},
      0 0 15px ${props => props.otherColor},
      0 0 30px ${props => props.otherColor},
      0 0 60px ${props => props.otherColor};
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }
`;

const BtnInsideStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text.head2.color};
  z-index: 1;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);
  /* cursor: pointer; */

  ${breakpointsMedia({
    xs: css`
      padding: 8px 28px;
      border-radius: 10px;
    `,
    sm: css`
      /* padding: 18px 30px; */
      width: 100px;
      border-radius: 10px;
      font-size: 14px;
    `,
    md: css`
      padding: 18px 20px;
      width: 90px;
      border-radius: 12px;
      font-size: 1.2em;
    `,
    lg: css`
      padding: 18px 30px;
      width: 120px;
      border-radius: 12px;
      font-size: 1.2em;
    `,
  })}

  :hover {
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.tertiary.main.color};
    ${breakpointsMedia({
      md: css`
        letter-spacing: 4px;
      `,
      lg: css`
        letter-spacing: 6px;
      `,
    })}

    &::before {
      transform: skew(45deg) translate(200%);
    }
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skew(45deg) translate(0);
    transition: 0.5s;
  }
`;

Btn.Link = styled.a`
  ${BtnInsideStyles}
`;

Btn.NotLink = styled.div`
  ${BtnInsideStyles};
  border-top: 1px solid rgba(255, 173, 66, 0.4);
  border-bottom: 1px solid rgba(255, 173, 66, 0.4);
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 173, 66, 0.1), transparent);
    transform: skew(45deg) translate(0);
    transition: 0.5s;
  }
`;
