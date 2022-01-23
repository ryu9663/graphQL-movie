import { gql } from "@apollo/client"; //client에서 graphQL을 작성하는 방법, graphQL syntax

export const HOME_PAGE = gql`
  {
    movies(rating: 7, limit: 3) {
      title
    }
  }
`;
