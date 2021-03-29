import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../../foundation/Text/index';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const SquareWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background.secondary.color}70;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  border-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  box-shadow: ${({ theme }) => theme.defaultStyles.boxShadow};
  backdrop-filter: blur(8px);
  margin: 0.5em;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }
    return breakpointsMedia({
      ...(value.xs && {
        xs: css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          /* max-width: ${(100 * value.xs) / 12}%; */
          max-width: ${(100 * value.xs) / 12}%;
        `,
      }),
      ...(value.sm && {
        sm: css`
          flex: 0 0 ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        `,
      }),
      ...(value.md && {
        md: css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `,
      }),
      ...(value.lg && {
        lg: css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `,
      }),
      ...(value.xl && {
        xl: css`
          flex: 0 0 ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        `,
      }),
    });
  }}

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    return breakpointsMedia({
      ...(offset.xs && {
        xs: css`
          margin-left: ${(100 * offset.xs) / 12}%;
        `,
      }),
      ...(offset.sm && {
        sm: css`
          margin-left: ${(100 * offset.sm) / 12}%;
        `,
      }),
      ...(offset.md && {
        md: css`
          margin-left: ${(100 * offset.md) / 12}%;
        `,
      }),
      ...(offset.lg && {
        lg: css`
          margin-left: ${(100 * offset.lg) / 12}%;
        `,
      }),
      ...(offset.xl && {
        xl: css`
          margin-left: ${(100 * offset.xl) / 12}%;
        `,
      }),
    });
  }}

  ${propToStyle('display')}
  ${propToStyle('order')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
`;

const SquareHeader = styled.div`
  /* position: relative; */
  /* width: 100%; */
  /* top: -2.4em; */
  /* left: 1%; */
  border-top-left-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  padding: 0.5em 1.5em;

  /* ${breakpointsMedia({
    md: css`
      top: -3em;
    `,
  })} */

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background.main.color} 0%,
    ${({ theme }) => theme.colors.background.secondary.color} 30%,
    ${({ theme }) => theme.colors.background.secondary.color} 50%,
    rgba(255, 255, 255, 0) 98%
  );

  h1,
  h2 {
    line-height: 0.8;
    margin: 0.4em 0;
    text-transform: uppercase;
    text-align: center;
  }
`;

const SquareBody = styled.div`
  /* position: relative; */
  /* top: -2em; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.8em 1em;

  ${breakpointsMedia({
    md: css`
      padding: 0.8em 2em;
      flex-direction: row;
      justify-content: space-around;
    `,
  })}
`;

const Square = ({ title, value, offset, children }) => (
  <SquareWrapper value={value} offset={offset}>
    {title && (
      <SquareHeader>
        <Text tag="h1" variant="title" color="text.head1">
          {title}
        </Text>
      </SquareHeader>
    )}
    <SquareBody>{children}</SquareBody>
  </SquareWrapper>
);

export default Square;

Square.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  offset: PropTypes.any,
};

Square.defaultProps = {
  title: '',
  value: {},
  offset: {},
};
