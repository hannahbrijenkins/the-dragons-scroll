const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Text {
        _id: ID
        text: String
        createdAt: String
        username: String
    }
    type Query {
        text: [Text]
    }
`;

module.exports = typeDefs;