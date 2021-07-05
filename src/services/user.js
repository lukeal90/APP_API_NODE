//const user = require('../models/user');
const user = require('../models/user');
const UserModel = require('../models/user');


const addUser = (user) => {
  user.save();
};

const checkEmail = (email) => {
  return UserModel.findOne({
    'email' : email
  }).exec();
}

const deleteUser = (id) => {
  return UserModel.findByIdAndUpdate( id, {deleted: true});
}

const searchUserById = async (id) => {
  return await UserModel.findOne({_id: id , deleted: false}).exec();
}

const searchUserByName = async(name)=>{
  return UserModel.findOne({name: name, deleted: false}); 
}

const addFriend = async (user, idF) => {
  user.friends.push(idF);
  user.save();
}

const deleteFriend  = async (user,idF) => {
  user.friends.pull(idF);
  user.save();
}

const getFriends = async (user) =>{
    return user.friends;
}

const addMovie = async (user, idM) => {
  user.movies.push(idM);
  user.save();
}

const deleteMovie = async (user, idM)=>{
  user.movies.pull(idM);
  user.save();
}

const getMovies = async (user) =>{
  return user.movies;
}


module.exports = {
  addUser,
  addFriend,
  deleteFriend,
  getFriends,
  deleteUser,
  getMovies,
  addMovie,
  deleteMovie,
  searchUserByName,
  searchUserById,
  checkEmail
};
