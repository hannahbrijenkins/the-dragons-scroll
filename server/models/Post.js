const moment = require('moment');
const { Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        post: {
            type: String,
            required: 'You cannot post a blank text post! Please share your wisdom...',
            minlength: 3,
            maxlength: 500
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    }
);

const Post = model('Post', postSchema);

module.exports = Post;