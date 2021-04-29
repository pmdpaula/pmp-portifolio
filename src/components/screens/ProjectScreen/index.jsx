import Image from 'next/image';
import { PropTypes } from 'prop-types';

import Box from '../../../foundation/layout/Box';
import Grid from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import Square from '../../commons/Square/index';

export { getProjectContent } from './getProjectContent';
export { getProjectsPath } from './getProjectsPath';

const ProjectScreen = ({ project }) => (
  <Box
    flex={1}
    display="flex"
    // flexWrap="wrap"
    flexDirection="column"
    // justifyContent="center"
    alignItems="center"
    style={{ zIndex: 50 }}
  >
    <Grid.Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      <Square
        title={`Projeto ${project.title}`}
        value={({ sm: 12 }, { md: 10 })}
        offset={{ md: 1 }}
        // value={11}
        // style={{ position: 'absolute', width: '90%' }}
      >
        <Text tag="h3" variant="subTitle">
          {project.subTitle}
        </Text>
        <Box
          width="70%"
          style={{ marginBottom: '2em', objectFit: 'contain' }}
          display="block"
          // flex_direction="column"
          // alignItens="center"
        >
          <Image
            src={project.cardBlock[0].cardImgSrc}
            alt={project.cardBlock[0].cardImgAlt}
            layout="responsive"
            width={400}
            height={400}
            // style={{ margin: 'auto', borderRadius: '8px' }}
          />
        </Box>
        <Text tag="p" textAlign="justify">
          {project.description}
        </Text>
      </Square>
      <Square value={({ sm: 12 }, { md: 10 })} offset={{ md: 1 }}>
        <Text>Link</Text>
      </Square>
    </Grid.Container>
  </Box>
);

ProjectScreen.propTypes = {
  project: PropTypes.shape({
    // _id: PropTypes.string,
    ident: PropTypes.string,
    category: PropTypes.string,
    categoryTitle: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string,
    cardBlock: PropTypes.arrayOf(
      PropTypes.shape({
        cardTitleBack: PropTypes.string,
        cardImgSrc: PropTypes.string,
        cardImgAlt: PropTypes.string,
        cardText: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ProjectScreen;
