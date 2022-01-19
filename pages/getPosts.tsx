import client from "./client";
import { gql } from "@urql/core";
import { GetPostList } from "../types";

export const getPosts = async () => {
  const { data } = await client
    .query<GetPostList>(
      gql`
        query GetPostList {
          posts {
            nodes {
              excerpt
              id
              databaseId
              title
              slug
            }
          }
        }
      `
    )
    .toPromise();

  return data?.posts?.nodes?.slice() ?? [];
};
