const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        _id: ID
        post: String
        createdAt: String
        username: String
        comments: [Comment]
    }
    type User {
        _id: ID
        username: String
        email: String
        post: [Post]
        friends: [User]
    }
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts: [Post]
        post(_id: ID!): Post
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postText: String!): Post
        addComment(postId: ID!, commentText: String!): Post
    }
    type Auth {
        token: ID!
        user: User
    }
    
`;

module.exports = typeDefs;