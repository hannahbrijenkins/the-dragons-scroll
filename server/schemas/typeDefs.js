const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        _id: ID
        post: String
        createdAt: String
        username: String
        comment: [Comment]
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
        comment: String
        createdAt: String
        username: String
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String!): [Post]
        post(_id: ID!): Post
    }
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }
    
`;

module.exports = typeDefs;