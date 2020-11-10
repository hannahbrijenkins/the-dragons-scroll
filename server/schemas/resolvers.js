const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        post: async (parent, { username }) => {
            const params = username ? { username }: {};
            return Post.find(params).sort({ createdAt: -1})
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('post')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('post')     
        }
    },
    Mutation: {
        addUser: async (parents, args) => {
            const user = await User.create(args)
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id }},
                    { new: true }
                );

                return thoughtl
            }

            throw new AuthenticationError('Please log in before posting.')
        }
    }
};

module.exports = resolvers;