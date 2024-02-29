/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      posts {
        items {
          id
          caption
          image
          likes
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      story {
        items {
          id
          image
          createdAt
          updatedAt
          userStoryId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        posts {
          nextToken
        }
        story {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      caption
      image
      likes
      user {
        id
        name
        image
        posts {
          nextToken
        }
        story {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        caption
        image
        likes
        user {
          id
          name
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userPostsId
      }
      nextToken
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      image
      user {
        id
        name
        image
        posts {
          nextToken
        }
        story {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userStoryId
    }
  }
`;
export const listStories = /* GraphQL */ `
  query ListStories(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        user {
          id
          name
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userStoryId
      }
      nextToken
    }
  }
`;
