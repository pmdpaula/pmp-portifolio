import { connect } from '../../../utils/database';
import ProjectScreen from '../../components/screens/ProjectScreen';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

function ProjectInternalScreen({ project }) {
  // console.log(typeof project);
  // return (
  //   <div>
  //     Ei
  //     <pre>{JSON.stringify(project, null, 4)}</pre>
  //   </div>
  // );
  return <ProjectScreen project={project} />;
}

ProjectInternalScreen.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectInternalScreen);

export const getStaticProps = async ({ params }) => {
  const { db } = await connect();

  const projectData = await db
    .collection(process.env.DATABASE_COLLECTION)
    .findOne({ id: params.id });
  // .toArray();

  return {
    props: {
      // id: projectData.id,
      project: JSON.parse(JSON.stringify(projectData)),
      pageWrapperProps: {
        seoProps: {
          headTitle: projectData.title,
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
    },
  };
};

export const getStaticPaths = async () => {
  const { db } = await connect();

  const projectsData = await db
    .collection(process.env.DATABASE_COLLECTION)
    .find({})
    .toArray();

  const paths = projectsData.map(e => ({ params: { id: e.id } }));

  return {
    paths,
    fallback: false,
  };
};
