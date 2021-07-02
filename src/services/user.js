//const user = require('../models/user');
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
    const user = UserModel.findByIdAndUpdate({_id: id, deleted: false},{deleted: true} ,(err, res)=> {});
    return user;
}

const addFriend =  (idU, idF) => {
  const user =  UserModel.findById(idU).exec();
  user.friends.push(idF);
  user.save();
}

const deleteFriend =  (idU,idF) => {
  const user = UserModel.findById(idU).exec();
  user.friends.findOneAndDelete(idF);
  user.save();
}

const getFriend = (idU, idF) =>{
  const user = UserModel.findById(idU);
  return user.friends.findOne(idF).exec();
}

const getFriends = (idU) =>{
  const user =  UserModel.findById(idU).exec();
  return user.UserModel.friends.find().exec();
}

const addMovie = (idU, idM, title, image) => {
  const user =  UserModel.findById(idU).exec();
  const movie = {idPelicula: idM, titulo: title, imagen: image};

  user.movies.push(movie);
  user.save();
}

const getMovies = (idU) =>{
  const user =  UserModel.findById(idU).exec();
  return user.movies.find().exec();
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
  checkEmail
};
