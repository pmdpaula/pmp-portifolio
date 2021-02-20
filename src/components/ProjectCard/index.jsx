import styled from 'styled-components';
import PropTypes from 'prop-types';

import Tilt from 'react-parallax-tilt';

const ProjectCard = props => (
  <Tilt>
    <MainCard>
      <Content>
        <CardNumber>01</CardNumber>
        <CardTitle>Card 1</CardTitle>
        <CardText>
          Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
          disputationi eu sit. Vide electram sadipscing et per. Per aumento de
          cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
          ampola pa arma uma pindureta.
        </CardText>
        <CardLink href="#">link</CardLink>
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
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
  transform: translateY(100px);
  opacity: 0;
  transition: 0.5s;

  :hover {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const CardNumber = styled.h2`
  position: absolute;
  top: -120px;
  right: 10px;
  font-size: 4em;
  color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.text.main.color};
  z-index: 1;
`;

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
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.defaultStyles.boxShadow};
`;

export default ProjectCard;
