/* eslint-disable import/prefer-default-export */
import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getCardsContent({ preview }) {
  const query = gql`
    query MyQuery3 {
      allProjects {
        ident
        title
        subTitle
        icon
        categoryTitle
        category
        cardBlock {
          cardTitleBack
          cardText
          cardImgSrc
          cardImgAlt
        }
      }
    }
  `;
  const client = CMSGraphQLClient({ preview });

  const response = await client.query({ query });

  return response.data.messages.allProjects;
}
