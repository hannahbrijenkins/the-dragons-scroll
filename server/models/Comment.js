const moment = require('moment');
const { Schema, model } = require('mongoose')

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            required: 'You cannot post a blank text post! Please share your wisdom...',
            minlength: 1,
            maxlength: 250
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        }
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;