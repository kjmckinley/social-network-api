const { Schema, model } = require('mongoose');
const dateformat = require('../utils/dateFormat');


const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.])/,
            unique: true
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [this]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// UserSchema.virtual('friendCount').get(function () {
//     return this.friends.length;
// });

const User = model('User', UserSchema);

module.exports = User;