import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import propToStyle from '../../theme/utils/propToStyle';
import { colors } from '../../theme/light';

// https://youtu.be/YrOq7OpRV8I

const GlassButton = ({ href, ...props }) => (
  <Btn>
    <LinkBtn href={href}>{props.children}</LinkBtn>
  </Btn>
);

export default GlassButton;

// const Container = styled.div`\
//   width:
// `;

const Btn = styled.div`
  position: relative;
  /* min-width: 60px; */
  /* height: 50px; */
  margin: 4px;
  padding: 18px;

  :hover {
    ::before {
      left: -50%;
      bottom: 5px;
      height: 50%;
      width: 200%;
      border-radius: 30px;
      background: rgba(0, 200, 0, 0.7);
      transition-delay: 0.3s;
    }

    ::after {
      top: 5px;
      left: -50%;
      height: 50%;
      width: 200%;
      border-radius: 30px;
      background: rgba(0, 200, 0, 0.7);
      transition-delay: 0.3s;
    }
  }

  ::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(50%);
    bottom: -5px;
    width: 100%;
    height: 10px;
    background: rgba(0, 100, 0, 0.3);
    box-shadow: 0 0 5px rgba(0, 100, 0, 1), 0 0 15px rgba(0, 100, 0, 1),
      0 0 30px rgba(0, 100, 0, 1), 0 0 60px rgba(0, 100, 0, 1);
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }

  ::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(50%);
    top: -5px;
    width: 100%;
    height: 10px;
    background: rgba(0, 100, 0, 0.3);
    box-shadow: 0 0 5px rgba(0, 100, 0, 1), 0 0 15px rgba(0, 100, 0, 1),
      0 0 30px rgba(0, 100, 0, 1), 0 0 60px rgba(0, 100, 0, 1);
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }
`;

const LinkBtn = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35 px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  /* border-radius: 12px; */
  color: ${({ theme }) => theme.colors.text.head2.color};
  z-index: 1;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);

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
      padding: 18px 30px;
      width: 120px;
      border-radius: 12px;
      font-size: 1.2em;
    `,
  })}

  :hover {
    letter-spacing: 3px;
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

  /* https://youtu.be/YrOq7OpRV8I?t=437 */
  /* :hover ::before & {
    transform: skew(45deg) translate(100px);
  } */
`;
