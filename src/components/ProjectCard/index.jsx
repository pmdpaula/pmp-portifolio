import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, titleback, imgsrc, imgalt, text, link }) => (
  <Tilt>
    <MainCard>
      <ContentTitle>
        <CardTitle>{title}</CardTitle>
        <CardNumber>{titleback}</CardNumber>
      </ContentTitle>
      <Content>
        <Tilt>
          {/* <CardImgBox> */}
          <Image
            src={imgsrc}
            alt={imgalt}
            width={220}
            height={220}
            // layout="instrinsic"
          />
          {/* </CardImgBox> */}
        </Tilt>
        <CardText>{text}</CardText>
        <CardLink href={link}>Ver Mais</CardLink>
      </Content>
    </MainCard>
  </Tilt>
);

// ProjectCard.propTypes = {

// };

const MainCard = styled.div`
  position: relative;
  width: 280px;
  height: 400px;
  margin: 30px;
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
  backdrop-filter: blur(5px);
  font-size: 3em;
  text-align: center;
`;

const ContentTitle = styled.div`
  z-index: 1;
`;

const CardTitle = styled.h3`
  position: absolute;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.text.main.color};
  /* z-index: 1; */
`;

const CardNumber = styled.h2`
  position: absolute;
  top: -100px;
  right: 10px;
  font-size: 4em;
  color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
`;

const Content = styled.div`
  z-index: 1;
  padding: 60px 20px 20px 20px;
  text-align: center;
  /* transform: translateY(100px);
  opacity: 0; */
  filter: blur(5px);
  transition: 0.5s;

  ${MainCard}:hover & {
    filter: blur(0px);
  }

  /* :hover {
    transform: translateY(0px);
    opacity: 1; */
  /* } */
`;

// const CardImgBox = styled.div`
//   position: relative;
//   max-width: 360px;
//   height: 60%;
// `;

// const CardImg = styled(Image)`
//   width: 100%;
//   height: 60%;
//   filter: blur(2px);
//   transition: 0.2s;

//   ${MainCard}:hover & {
//     filter: blur(0px);
//   }
// `;

const CardText = styled.p`
  font-size: 0.5em;
  color: ${({ theme }) => theme.colors.text.main.color};
  font-weight: 300;
`;

const CardLink = styled.a`
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

export default ProjectCard;
