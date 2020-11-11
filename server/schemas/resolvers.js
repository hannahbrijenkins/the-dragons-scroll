const { User, Post, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('posts')
                .populate('friends')

            return userData;
            }

            throw new AuthenticationError('Not logged in')
        },
        post: async (parent, { username }) => {
            const params = username ? { username }: {};
            return Post.find(params).sort({ createdAt: -1})
        },
        posts: async (parent, args) => {
            return Post.fin
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
            };

            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args, context) => {
            // console.log(args);
            if (context.user) {
                const post = await Post.create({ post: args.postText, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id }},
                    { new: true }
                );

                return post;
            }

            throw new AuthenticationError('Please log in before posting.')
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
                const updatedPost = await Comment.findOneAndUpdate(
                    { _id: Post._id },
                    { $push: { comments: { commentText, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedPost;
            }

            throw new AuthenticationError('You need to log in!')
        }
    }
};

module.exports = resolvers;