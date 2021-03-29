/* eslint-disable indent */
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../foundation/Text';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

// https://www.youtube.com/watch?v=0ltdZ8CrqG8

const FrontTextStyled = styled(Text)`
  /* position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  padding: 20px;
  font-family: 'Comfortaa', cursive;
  color: ${({ theme }) => theme.colors.text.main.color};
  /* border: 1px solid #000; */
  text-shadow: 5px 5px 5px
    ${({ theme }) => theme.colors.background.secondary.color};
  filter: blur(1px);

  ::after {
    content: attr(data-text);
    position: absolute;
    top: 20px;
    left: 0;
    padding: 0 20px;
    z-index: -1;
    color: ${({ theme }) => theme.colors.text.main.color};
    filter: blur(15px);
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background.secondary.color};
    z-index: -2;
    opacity: 0.3;
    filter: blur(20px);

    ${breakpointsMedia({
      md: css`
        filter: blur(40px);
      `,
      lg: css`
        filter: blur(60px);
      `,
    })}
  }
`;

const FrontText = ({ tag, variant, textAlign, ...props }) => (
  <FrontTextStyled
    tag={tag}
    variant={variant}
    textAlign={textAlign}
    // eslint-disable-next-line react/destructuring-assignment
    data-text={props.children}
  >
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.children}
  </FrontTextStyled>
);

export default FrontText;

FrontText.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

FrontText.propTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string.isRequired,
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'p',
    'li',
    'a',
    'span',
    'ul',
  ]),
  variant: PropTypes.oneOf([
    'hugeTitle',
    'title',
    'subTitle',
    'paragraph1',
    'paragraph2',
    'smallestException',
    'buttonText',
  ]),
};
