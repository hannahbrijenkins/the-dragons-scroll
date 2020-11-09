const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must be an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        textPosts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Text'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

// middleware for password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

// compare incoming password with hashed password
userSchema.methods.isCorrectPassword = async function(pasword) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;