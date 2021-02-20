/* eslint-disable indent */
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariants } from '../../../foundation/Text';

const MenuWrapper = styled.nav`
  /* font-family: 'Roboto', sans-serif; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  max-width: 98%;
  margin: 18px;
  /* margin-top: 18px; */
  /* padding-left: 28px;
  padding-right: 28px; */
  ${breakpointsMedia({
    md: css`
      margin-top: 24px;
      /* margin-left: auto;
      margin-right: auto; */
      /* width: 100%; */
      /* padding: 0 16px; */
      max-width: 700px;
    `,
    lg: css`
      /* max-width: 85%; */
      /* max-width: 1160px; */
    `,
    xl: css`
      /* max-width: 65%; */
      max-width: 1222px;
    `,
  })};
`;

export default MenuWrapper;

MenuWrapper.LeftSide = styled.div`
  /* padding-right: 8px; */
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    xs: css`
      width: 50px;
      height: 30px;
    `,
    md: css`
      width: 131px;
      height: 36px;
      /* padding-right: 22px; */
      order: initial;
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
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e; */
  /* padding: 12px; */

  /* ${breakpointsMedia({
    xs: css`
      padding: 8px 18px;
      border-radius: ${borderXs};
    `,
    md: css`
      padding: 15px 30px;
      border-radius: ${borderMd};
    `,
  })} */

  ${breakpointsMedia({
    xs: css`
      /* max-width: 90%; */
    `,
    md: css`
      max-width: 600px;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
    `,
    lg: css`
      max-width: 900px;
    `,
  })}/* a { */
    /* text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.head2.color}; */
    /* transition: 200ms ease-in-out; */
    /* background: rgba(45, 59, 41, 0.219); */
    /* padding: 6px 16px; */

    /* ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })} */
    /* &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    } */
  /* } */
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
