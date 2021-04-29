import _ from 'lodash';
import { PropTypes } from 'prop-types';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import Box from '../../../foundation/layout/Box';
import Grid from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text/index';
import Button from '../../commons/Button/index';
import Square from '../../commons/Square';
import ProjectCard from '../../ProjectCard';

export { getCardsContent } from './getCardsContent';

const ListProjectsScreen = ({ projectsData }) => {
  const [listedCategory, setListedCategory] = useState('all');

  const changeProjectsToShow = () => {
    if (listedCategory !== 'all') {
      return _.filter(projectsData, {
        category: listedCategory,
      });
    }

    return projectsData;
  };

  const projectsToShow = changeProjectsToShow();
  const { defaultStyles } = useContext(ThemeContext);

  const categoriesList = _.unionBy(projectsData, 'category').map(e => ({
    category: e.category,
    categoryTitle: e.categoryTitle,
  }));

  const ButtonsOfCategories = () => {
    const Buttons = categoriesList.map(e => {
      const eKey = `e_${e.category}`;
      return (
        <Button
          key={eKey}
          onClick={() => {
            setListedCategory(e.category);
          }}
          variant={listedCategory === e.category && 'secondary.main'}
          style={{ margin: '0.2em', width: '18em' }}
        >
          {e.categoryTitle}
        </Button>
      );
    });

    return Buttons;
  };

  return (
    <>
      <Box
        flex={1}
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        maxWidth={defaultStyles.contentWidth}
      >
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

          <Square
            title="Categorias"
            value={({ sm: 12 }, { md: 10 }, { lg: 8 })}
          >
            <Button
              onClick={() => {
                setListedCategory('all');
              }}
              variant={listedCategory === 'all' && 'secondary.main'}
              style={{ margin: '0.2em', width: '18em' }}
            >
              Todas
            </Button>

            <ButtonsOfCategories />
          </Square>
        </Grid.Col>

        <Grid.Row display="flex" justifyContent="center" alignItems="center">
          {projectsToShow.map((project, idx) => {
            const cardKey = `${project.ident}_${idx}`;
            return (
              <ProjectCard
                key={cardKey}
                title={project.title}
                titleback={project.cardBlock[0].cardTitleBack}
                imgsrc={project.cardBlock[0].cardImgSrc}
                imgalt={project.cardBlock[0].cardImgAlt}
                text={project.cardBlock[0].cardText}
                link={`/projects/${project.ident}`}
              />
            );
          })}
        </Grid.Row>
      </Box>
    </>
  );
};

export default ListProjectsScreen;

ListProjectsScreen.propTypes = {
  projectsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      categoryTitle: PropTypes.string,
      title: PropTypes.string,
      subTitle: PropTypes.string,
      icon: PropTypes.string,
      description: PropTypes.string,
      card: PropTypes.shape({
        cardTitleBack: PropTypes.string,
        cardImgSrc: PropTypes.string,
        cardImgAlt: PropTypes.string,
        cardText: PropTypes.string,
      }),
    }),
  ).isRequired,
};
