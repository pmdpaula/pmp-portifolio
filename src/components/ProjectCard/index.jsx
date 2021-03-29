import Image from 'next/image';
import { PropTypes } from 'prop-types';
import Tilt from 'react-parallax-tilt';

import ProjectCardWrapper from './styles/ProjectCardWrapper';

const ProjectCard = ({ title, titleback, imgsrc, imgalt, text, link }) => (
  <Tilt>
    <ProjectCardWrapper>
      <ProjectCardWrapper.ContentTitle>
        <ProjectCardWrapper.CardTitle>{title}</ProjectCardWrapper.CardTitle>
        <ProjectCardWrapper.CardNumber>
          {titleback}
        </ProjectCardWrapper.CardNumber>
      </ProjectCardWrapper.ContentTitle>
      <ProjectCardWrapper.Content>
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
        <ProjectCardWrapper.CardText>{text}</ProjectCardWrapper.CardText>
        <ProjectCardWrapper.CardLink href={link}>
          Ver Mais
        </ProjectCardWrapper.CardLink>
      </ProjectCardWrapper.Content>
    </ProjectCardWrapper>
  </Tilt>
);

// ProjectCard.propTypes = {

// };

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleback: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  imgalt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
