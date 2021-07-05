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
    friends: {
        type: [],
    },
    movies: {
        type: []
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

 UserSchema.methods.toJSON = function () {
     const { __v, passwd, ...user } = this.toObject();
    return user;
 }

module.exports = model('User', UserSchema);