import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Text from '../foundation/Text';
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

export default function Home() {
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
      {/* <Box
        // flex={1}
        width={defaultStyles.contentWidth}
        display="flex"
        justifyContent="center"
      > */}
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        style={{ zIndex: 1000 }}
        maxWidth={defaultStyles.contentWidth}
      >
        <Menu />
        <Grid.Col display="flex" justifyContent="center" alignItems="center">
          {/* <Grid.Row> */}
          <Box
            display="flex"
            flexWrap="wrap"
            // flexDirection="row"
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
            {/* <ProjectCard
        imgsrc="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        imgalt="Imagem01"
      />
      <ProjectCard>
        <img
          src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2ltcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          width="200px"
          alt="Imagem"
        />
      </ProjectCard> */}
          </Box>
          {/* </Grid.Row> */}
        </Grid.Col>
        <Footer />
      </Box>
      {/* </Box> */}
    </>
  );
}
