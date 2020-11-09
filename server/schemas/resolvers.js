const { User, Text } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        text: async (parent, { username }) => {
            const params = username ? { username }: {};
            return Text.find(params).sort({ createdAt: -1})
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('text')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('text')     
        }
    }
};

module.exports = resolvers;