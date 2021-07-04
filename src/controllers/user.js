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
    const { _id, id } = req.body;
    res.send(await UserService.addFriend(_id, id))
  }catch(error){
    next(error)
  }

}

const getFriends = async (req, res,next ) =>{
 try{
   res.send(await UserService.getFriends(req.params.id));
 }catch(error){
  next(error)
 }
 
}

const getFriend = async (req, res, next ) =>{
  try{
    const {_id, id} = req.body;
    res.send(await UserService.getFriend(_id,id));
}catch (error) {
    next(error);
  }

}
  
const deleteFriend = async (req, res,next) =>{
  try{
    const { _id, id } = req.body;
     res.send(await UserService.deleteFriend(_id, id));
  }catch (error) {
    next(error);
  }
}

const addMovie = async  (req, res, next) =>{
try{
  const  {_id, movie} = req.body;
  //const {idUser, idMovie, titulo, imagen } = req.body;
  res.send(await UserService.addMovie(_id, movie));
}catch (error) {
  next(error);
  }

}

const deleteMovie = async (req, res, next) =>{
  try{
    const { _id, movie } = req.body;
    res.send(await UserService.deleteMovie(_id, movie))
  }catch (error){
    next(error);
  }
}


const getMovies = async (req, res, next) =>{
  try{
    const {_id} = req.params;
    res.send(await User.service.getMovies(_id));
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
