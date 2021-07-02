const UserService = require('../services/user');
const User = require('../models/user');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const addUser = async (req, res, next) => {
  try {
    const { name, email, passwd } = req.body;
    const deleted = false;
    const user = new User({name,email,passwd, deleted});
    // Encriptar password
    const salt = bcryptjs.genSaltSync(10);
    user.passwd = bcryptjs.hashSync(passwd, salt);

    res.send(await UserService.addUser(user));
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    res.send(await UserService.deleteUser(req.params.id));

  } catch (error) {
    next(error);
  }
};

const addFriend = async (req, res,next) =>{

  try{
    const { idUser, idFriend } = req.body;
    const idU =  mongoose.Types.ObjectId(idUser);
    const idF = mongoose.Types.ObjectId(idFriend);
    res.send(await UserService.addFriend(idU, idF))
  }catch(error){
    next(error)
  }

}

const getFriends = async (req, res,next ) =>{
 try{
   const {idUser} = req.params;
   const idU =  mongoose.Types.ObjectId(idUser);
  res.send(await UserService.getFriends(idU));
 }catch(error){
  next(error)
 }
 
}

const getFriend = async (req, res, next ) =>{
  try{
    const { idUser, idFriend} = req.body;
    const idU =  mongoose.Types.ObjectId(idUser);
    const idF = mongoose.Types.ObjectId(idFriend);
    res.send(await UserService.getFriend(idU,idF));
}catch (error) {
    next(error);
}

}
  
const deleteFriend = async (req, res,next) =>{
  try{
    const { idUser, idFriend} = req.body;
    const idU =  mongoose.Types.ObjectId(idUser);
    const idF = mongoose.Types.ObjectId(idFriend);
    res.send(await UserService.deleteFriend(idU, idF));
  }catch (error) {
    next(error);
  }
}

const addMovie = async  (req, res, next) =>{
try{
  const {idUser, idMovie, titulo, imagen } = req.body;
  const idU =  mongoose.Types.ObjectId(idUser);
 

  res.send(await UserService.addMovie(idU, idMovie, titulo, imagen));

}catch (error) {
  next(error);
}

}

const deleteMovie = async (req, res, next) =>{
  try{


  }catch (error){
    next(error);
  }
}


const getMovies = async (req, res, next) =>{
  try{
    const {idUser} = req.params;
    const idU = mongoose.Types.ObjectId(idUser);
    res.send(await User.service.getMovies(idU));
  }catch (error){
    next(error);
  }
}


module.exports = {
  addUser,
  deleteUser,
  addFriend,
  getFriends,
  getFriend,
  deleteFriend,
  deleteUser,
  addMovie,
  deleteMovie,
  getMovies
};
