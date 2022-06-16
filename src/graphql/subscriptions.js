/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory {
    onCreateStory {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory {
    onUpdateStory {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory {
    onDeleteStory {
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
