import styled, { css } from 'styled-components';

// import PropTypes from 'prop-types';
// import Tilt from 'react-parallax-tilt';
// import Image from 'next/image';
// import Link from 'next/link';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ProjectCardWrapper = styled.div`
  position: relative;
  height: 400px;
  margin: 1.8rem 1.5rem;
  font-weight: 500;
  box-shadow: 20px 20px 50px rgbs(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  font-size: 3em;
  text-align: center;
  width: 32rem;

  ${breakpointsMedia({
    md: css`
      width: 28rem;
    `,
  })}
`;

export default ProjectCardWrapper;

ProjectCardWrapper.ContentTitle = styled.div`
  z-index: 1;
`;

ProjectCardWrapper.CardTitle = styled.h3`
  position: absolute;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.text.main.color};
  /* z-index: 1; */
`;

ProjectCardWrapper.CardNumber = styled.h2`
  position: absolute;
  top: -100px;
  right: 10px;
  font-size: 4em;
  color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
`;

ProjectCardWrapper.Content = styled.div`
  z-index: 1;
  padding: 60px 20px 20px 20px;
  text-align: center;
  /* transform: translateY(100px);
opacity: 0; */
  filter: blur(1px);

  ${breakpointsMedia({
    md: css`
      filter: blur(5px);
    `,
  })}

  transition: 0.5s;

  ${ProjectCardWrapper}:hover & {
    filter: blur(0px);
  }

  /* :hover {
  transform: translateY(0px);
  opacity: 1; */
  /* } */
`;

// ProjectCardWrapper.CardImgBox = styled.div`
//   position: relative;
//   max-width: 360px;
//   height: 60%;
// `;

// ProjectCardWrapper.CardImg = styled(Image)`
//   width: 100%;
//   height: 60%;
//   filter: blur(2px);
//   transition: 0.2s;

//   ${MainCard}:hover & {
//     filter: blur(0px);
//   }
// `;

ProjectCardWrapper.CardText = styled.p`
  font-size: 0.5em;
  color: ${({ theme }) => theme.colors.text.main.color};
  font-weight: 300;
`;

ProjectCardWrapper.CardLink = styled.a`
  position: relative;
  display: inline-block;
  font-size: 0.5em;
  padding: 8px 20px;
  margin-top: 15px;
  background: ${({ theme }) => theme.colors.background.secondary.color};
  color: ${({ theme }) => theme.colors.text.main.color};
  border-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.defaultStyles.boxShadow};
`;
