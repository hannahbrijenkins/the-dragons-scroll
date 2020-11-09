const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Text {
        _id: ID
        text: String
        createdAt: String
        username: String
    }
    type User {
        _id: ID
        username: String
        email: String
        textPosts: [Text]
        friends: [User]
    }
    type Query {
        users: [User]
        user(username: String!): User
        text(username: String): [Text]
    }
    
`;

module.exports = typeDefs;