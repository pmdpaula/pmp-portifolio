/* eslint-disable import/prefer-default-export */
import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getProjectsPath({ preview }) {
  const query = gql`
    query ProjectsPath {
      allProjects {
        ident
      }
    }
  `;

  const client = CMSGraphQLClient({ preview });

  const response = await client.query({ query });

  return response.data.messages.allProjects;
}
