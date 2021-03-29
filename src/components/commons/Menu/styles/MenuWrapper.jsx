/* eslint-disable indent */
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const MenuWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 98%;
  margin: 18px;
  opacity: ${props => (props.show ? '1' : '0')};
  pointer-events: ${props => !props.show && 'none'};
  /* ${breakpointsMedia({
    md: css`
      margin-top: 24px;
      max-width: 700px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}; */
`;

export default MenuWrapper;

MenuWrapper.LeftSide = styled.div`
  margin: 0;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${breakpointsMedia({
    md: css`
      width: 250px;
      order: initial;
      justify-content: space-between;
    `,
  })}
`;

// const borderXs = '10px';
// const borderMd = '20px';

MenuWrapper.CentralSide = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  /* height: 100%; */
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e; */
  /* padding: 12px; */

  ${breakpointsMedia({
    xs: css`
      /* max-width: 90%; */
    `,
    md: css`
      max-width: 600px;
      flex: 1;
      order: initial;
      border: none;
      /* margin: 0; */
    `,
    lg: css`
      max-width: 900px;
    `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
