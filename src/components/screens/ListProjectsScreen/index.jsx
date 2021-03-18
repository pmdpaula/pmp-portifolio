import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { PropTypes } from 'prop-types';
import _ from 'lodash';

import Box from '../../../foundation/layout/Box';
import Grid from '../../../foundation/layout/Grid';
import ProjectCard from '../../ProjectCard';
import Text from '../../../foundation/Text/index';
import Square from '../../commons/Square';
import Button from '../../commons/Button/index';

const ListProjectsScreen = ({ projectsData }) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [listedCategory, setListedCategory] = useState('all');

  // useEffect(() => {

  // }, [listedCategory]);

  const { defaultStyles } = useContext(ThemeContext);

  const categoriesList = _.unionBy(projectsData, 'category').map(e => ({
    category: e.category,
    categoryTitle: e.categoryTitle,
  }));

  return (
    <>
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        // style={{ zIndex: { numberOfBlocksBg } + 10 }}
        maxWidth={defaultStyles.contentWidth}
      >
        <Grid.Col
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
        // value={({ sm: 12 }, { md: 8 }, { lg: 12 })}
        >
          {/* <Grid.Col> */}
          <Grid.Col
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            // maxWidth={defaultStyles.contentWidth}
          >
            <Text tag="h1" variant="title" style={{ zIndex: 100 }}>
              Segue aqui meus projetos
            </Text>

            <Square title="Categorias">
              <ul>
                <Button
                  onClick={() => {
                    setListedCategory('all');
                  }}
                >
                  Todas
                </Button>
                {categoriesList.map(e => {
                  const eKey = `e_${e.category}`;
                  return (
                    <li key={eKey}>
                      <Button
                        onClick={() => {
                          setListedCategory(e.category);
                        }}
                      >
                        {e.categoryTitle}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </Square>
          </Grid.Col>

          <Grid.Row display="flex" justifyContent="center" alignItems="center">
            {listedCategory === 'all'
              ? projectsData.map((project, idx) => {
                  const cardKey = `${project.id}_${idx}`;
                  return (
                    <ProjectCard
                      key={cardKey}
                      title={project.title}
                      titleback={project.card.cardTitleBack}
                      imgsrc={project.card.cardImgSrc}
                      imgalt={project.card.cardImgAlt}
                      text={project.card.cardText}
                      link=""
                    />
                  );
                })
              : _.filter(projectsData, {
                  category: listedCategory,
                }).map((project, idx) => {
                  const cardKey = `${project.id}_${idx}`;
                  return (
                    <ProjectCard
                      key={cardKey}
                      title={project.title}
                      titleback={project.card.cardTitleBack}
                      imgsrc={project.card.cardImgSrc}
                      imgalt={project.card.cardImgAlt}
                      text={project.card.cardText}
                      link=""
                    />
                  );
                })}
          </Grid.Row>
          {/* </Box> */}
        </Grid.Col>
      </Box>
    </>
  );
};

export default ListProjectsScreen;

ListProjectsScreen.propTypes = {
  projectsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      category: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          subTitle: PropTypes.string,
          icon: PropTypes.string,
          description: PropTypes.string,
          card: PropTypes.shape({
            cardTitleBack: PropTypes.string,
            cardImgSrc: PropTypes.string,
            cardImgAlt: PropTypes.string,
            cardText: PropTypes.string,
            // cardLink: '/',
          }),
        }),
      ),
    }),
  ).isRequired,
};
