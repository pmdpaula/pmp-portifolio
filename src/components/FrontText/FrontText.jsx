import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

import Text from '../../foundation/Text';

// https://www.youtube.com/watch?v=0ltdZ8CrqG8

const FrontTextStyled = styled(Text)`
  /* position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  margin-top: 120px;
  padding: 0 20px;
  font-family: 'Comfortaa', cursive;
  color: ${({ theme }) => theme.colors.text.main.color};
  /* border: 1px solid #000; */
  text-shadow: 5px 5px 5px
    ${({ theme }) => theme.colors.background.secondary.color};
  filter: blur(1px);

  /* ::after {
    content: attr(data-text);
    position: relative;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: -1;
    color: ${({ theme }) => theme.colors.text.main.color};
    filter: blur(15px)
  } */
  /*
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background.secondary.color};
    z-index: -2;
    opacity: .3;

    ${breakpointsMedia({
    xs: css`
      filter: blur(20px);
    `,
    md: css`
      filter: blur(40px);
    `,
    lg: css`
      filter: blur(60px);
    `,
  })}
  } */
`;

const FrontText = ({ tag, variant, textAlign, ...props }) => (
  <FrontTextStyled
    tag={tag}
    variant={variant}
    textAlign={textAlign}
    data-text={props.children}
  >
    {props.children}
  </FrontTextStyled>
);

export default FrontText;
