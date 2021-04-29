/* eslint-disable import/prefer-default-export */
// import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent({ preview }) {
  const query = gql`
    query PageAbout {
      pageAbout {
        introductionTitle
        introductionSubtitle
        introductionText
        block1Head
        block1Text
        block2Head
        block2Text {
          value
        }
      }
    }
  `;
  const client = CMSGraphQLClient({ preview });
  const response = await client.query({ query });

  return response.data.messages.pageAbout;
}
