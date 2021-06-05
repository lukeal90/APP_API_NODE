const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: 'string',
        required: [true, 'name is required']
    },
    email: {
        type: 'string',
        required: [true, 'email is required'],
        unique: true
    },
    passwd: {
        type: 'string',
        required: [true, 'password is required'],
    },
    img: {
        type: 'string',
    },
    state: {
        type: Boolean
    },
    friends: {
        type: Array,
    },
    reviews: {
        type: Array
    }
});

module.exports = model('User', UserSchema);