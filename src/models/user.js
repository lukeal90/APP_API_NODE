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
        //type: [{idPelicula: integer, titulo: String, imagen: String}]
        type: []
    },
    deleted: {
        type: Boolean,
    }
});

module.exports = model('User', UserSchema);