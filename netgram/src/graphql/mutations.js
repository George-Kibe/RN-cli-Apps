/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
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
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
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
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
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
