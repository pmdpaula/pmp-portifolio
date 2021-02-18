/* eslint-disable indent */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '../../theme/utils/propToStyle';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

const Text = ({ variant, children, tag, ...props }) => (
  <TextBase
    as={tag}
    variant={variant}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </TextBase>
);

export default Text;

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

/* const buttonText = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.buttonText.fontSize};
    font-weight: ${theme.typographyVariants.buttonText.fontWeight};
    line-height: ${theme.typographyVariants.buttonText.lineHeight};
  `}
` */

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  buttonText: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.buttonTextXS.fontSize};
      font-weight: ${theme.typographyVariants.buttonTextXS.fontWeight};
      line-height: ${theme.typographyVariants.buttonTextXS.lineHeight};
    `}
    ${breakpointsMedia({
      lg: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.buttonText.fontSize};
          font-weight: ${theme.typographyVariants.buttonText.fontWeight};
          line-height: ${theme.typographyVariants.buttonText.lineHeight};
        `}
      `,
    })}
  `,
  hugeTitle: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.hugeTitleXS.fontSize};
      font-weight: ${theme.typographyVariants.hugeTitleXS.fontWeight};
      line-height: ${theme.typographyVariants.hugeTitleXS.lineHeight};
    `}
    ${breakpointsMedia({
      sm: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.hugeTitleSM.fontSize};
          font-weight: ${theme.typographyVariants.hugeTitleSM.fontWeight};
          line-height: ${theme.typographyVariants.hugeTitleSM.lineHeight};
        `}
      `,
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.hugeTitleMD.fontSize};
          font-weight: ${theme.typographyVariants.hugeTitleMD.fontWeight};
          line-height: ${theme.typographyVariants.hugeTitleMD.lineHeight};
        `}
      `,
      lg: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.hugeTitle.fontSize};
          font-weight: ${theme.typographyVariants.hugeTitle.fontWeight};
          line-height: ${theme.typographyVariants.hugeTitle.lineHeight};
        `}
      `,
    })}
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
  `,
  subTitle: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.subTitleXS.fontSize};
      font-weight: ${theme.typographyVariants.subTitleXS.fontWeight};
      line-height: ${theme.typographyVariants.subTitleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.subTitle.fontSize};
          font-weight: ${theme.typographyVariants.subTitle.fontWeight};
          line-height: ${theme.typographyVariants.subTitle.lineHeight};
        `}
      `,
    })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  text-decoration: none;
  ${propToStyle('textAlign')}
`;

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
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
