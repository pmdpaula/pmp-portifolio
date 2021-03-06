import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation/index';
import ProjectCard from '../components/ProjectCard/index';

const cardDB = [
  {
    cardTitle: 'Abajur',
    cardTitleBack: '01',
    cardImgSrc: '/images/card01.jpg',
    cardImgAlt: 'Imagem 01',
    cardText: 'Mussum Ipsum, abajusis',
    cardLink: '/',
  },
  {
    cardTitle: 'Triangulo',
    cardTitleBack: '02',
    cardImgSrc: '/images/card02.jpg',
    cardImgAlt: 'Imagem 02',
    cardText: 'Mussum Ipsum, triangulis',
    cardLink: '#',
  },
  {
    cardTitle: 'Coqueiros',
    cardTitleBack: '03',
    cardImgSrc: '/images/card03.jpg',
    cardImgAlt: 'Imagem 03',
    cardText: 'Mussum Ipsum, coqueiris',
    cardLink: '#',
  },
  {
    cardTitle: 'Escrever',
    cardTitleBack: '04',
    cardImgSrc: '/images/card04.jpg',
    cardImgAlt: 'Imagem 04',
    cardText: 'Mussum Ipsum, escreveris',
    cardLink: '#',
  },
  {
    cardTitle: 'Teclado',
    cardTitleBack: '05',
    cardImgSrc: '/images/card05.jpg',
    cardImgAlt: 'Imagem 05',
    cardText: 'Mussum Ipsum, tecladus',
    cardLink: '#',
  },
];

const Projects = () => {
  const { defaultStyles } = useContext(ThemeContext);

  return (
    <>
      <BackgroundAnimation
        numberOfBlocks={30}
        duration={20}
        direction="normal"
        easing="linear"
        dispersion={400}
      />
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        // style={{ zIndex: 0 }}
        maxWidth={defaultStyles.contentWidth}
      >
        <Menu />
        <Grid.Col display="flex" justifyContent="center" alignItems="center">
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {cardDB.map((data, idx) => {
              const cardKey = `${data.cardTitle}_${idx}`;
              return (
                <ProjectCard
                  key={cardKey}
                  title={data.cardTitle}
                  titleback={data.cardTitleBack}
                  imgsrc={data.cardImgSrc}
                  imgalt={data.cardImgAlt}
                  text={data.cardText}
                  link={data.cardLink}
                />
              );
            })}
          </Box>
        </Grid.Col>
        <Footer />
      </Box>
    </>
  );
};

export default Projects;
