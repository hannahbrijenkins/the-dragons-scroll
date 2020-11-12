import gql from 'graphql-tag';

export const QUERY_POSTS = gql
    `query {
        posts {
          _id
          post
          createdAt
          username
        }
      }
`;

