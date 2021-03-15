import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { PropTypes } from 'prop-types';
import { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import propToStyle from '../../theme/utils/propToStyle';
import { Link } from '../Link/index';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    get(theme, `colors.${variant}.color`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.defaultStyles.borderRadius};

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariants.paragraph1}
    `,
  })}

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

const Button = ({ href, ...props }) => {
  const isLink = Boolean(href);
  const componentTag = isLink ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={componentTag} href={href} {...props} />
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
};

export default Button;
