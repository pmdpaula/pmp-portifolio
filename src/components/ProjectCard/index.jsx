import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
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
