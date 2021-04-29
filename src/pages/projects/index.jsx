// import { connect } from '../../../utils/database';
import ListProjectsScreen, {
  getCardsContent,
} from '../../components/screens/ListProjectsScreen';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

function ListProjects({ projectsData }) {
  return <ListProjectsScreen projectsData={projectsData} />;
}
ListProjects.propTypes = ListProjectsScreen.propTypes;

export default websitePageHOC(ListProjects, {
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
      loop: false,
      opacity: 1,
    },
  },
});

export async function getStaticProps() {
  const projectsData = await getCardsContent(false);

  return {
    props: {
      projectsData,
    }, // will be passed to the page component as props
  };
}

// Dados vindo do MongoDB
// export async function getStaticProps() {
//   const { db } = await connect();

//   const projectsData = await db
//     .collection(process.env.PORTIFOLIOS_COLLECTION)
//     .find({})
//     .toArray();

//   return {
//     props: {
//       projectsData: JSON.parse(JSON.stringify(projectsData)),
//     }, // will be passed to the page component as props
//   };
// }
