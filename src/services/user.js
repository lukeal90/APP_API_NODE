//const user = require('../models/user');
const user = require('../models/user');
const UserModel = require('../models/user');

const addUser = (user) => {
  user.save();
};

const checkEmail = (email) => {
  return UserModel.findOne({
    'email' : email
  }).lean()
}

const deleteUser = (id) => {
    const user = UserModel.findOneAndUpdate({_id: id, deleted: false},{deleted: true} ,(err, res)=> {});
    return user;
}

const addFriend = async (idU, idF) => {
  const  user = await UserModel.findById({_id: idU }).exec()
  console.log(user);
  user.friends.push(idF);
  user.save();
}

const deleteFriend  = async (idU,idF) => {
  const  user = await UserModel.findById({_id: idU }).exec()
  user.friends.pull(idF)
  user.save();
}

const getFriend = (idU, idF) =>{
  const user = UserModel.findById(idU);
  return user.friends.findOne(idF).exec();
}

const getFriends = async (idU) =>{
  const user = await UserModel.findById({_id: idU }).exec();
    console.log(user.friends);
    return user.friends;
}

const addMovie = async (idU, idM) => {
  const user = await UserModel.findById({_id: idU }).exec();
  user.movies.push(idM);
  user.save();
  //const movie = {idPelicula: idM, titulo: title, imagen: image};
}

const deleteMovie = async (idU, idM)=>{
  const user = await UserModel.findById({_id: idU }).exec();
  user.movies.pull(idM);
  user.save();
}

const getMovies = async (idU) =>{
  const user = await UserModel.findById({_id: idU }).exec();
  return user.movies;
}


module.exports = {
  addUser,
  addFriend,
  deleteFriend,
  getFriend,
  getFriends,
  deleteUser,
  getMovies,
  addMovie,
  deleteMovie,
  checkEmail
};
