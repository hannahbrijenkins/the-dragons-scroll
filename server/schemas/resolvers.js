const { User, Text } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        text: async () => {
            return Text.find().sort({ createdAt: -1})
        }
    }
};

module.exports = resolvers;