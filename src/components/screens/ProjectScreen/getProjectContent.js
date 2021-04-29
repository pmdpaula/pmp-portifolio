/* eslint-disable import/prefer-default-export */
import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getProjectContent({ ident, preview }) {
  const query = gql`
    query ProjectContent($ident: StringFilter = {}) {
      project(filter: { ident: $ident }) {
        ident
        title
        icon
        description
        category
        categoryTitle
        cardBlock {
          cardImgAlt
          cardImgSrc
        }
      }
    }
  `;

  // formato esperado paravariables com o filter na query ==> { key: { eq: value } }
  const data = { query, variables: { ident: { eq: ident } }, preview };
  const client = CMSGraphQLClient(preview);
  const response = await client.query(data);

  return response.data.messages.project;
}
