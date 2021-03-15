import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import ProjectCard from '../components/ProjectCard/index';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

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

const ProjectsPage = () => {
  const { defaultStyles } = useContext(ThemeContext);
  const numberOfBlocksBg = 30;

  return (
    <>
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        style={{ zIndex: { numberOfBlocksBg } + 10 }}
        maxWidth={defaultStyles.contentWidth}
      >
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
      </Box>
    </>
  );
};

export default websitePageHOC(ProjectsPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projetos',
    },
    bgAnimationProps: {
      numberOfBlocks: 30,
      duration: 20,
      direction: 'normal',
      easing: 'linear',
      dispersion: 400,
    },
  },
});
