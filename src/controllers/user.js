const UserService = require('../services/user');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const addUser = async (req, res, next) => {
  try {
    const { name, email, passwd} = req.body;
    const user = new User({name,email,passwd});
    // Encriptar password
    const salt = bcrypt.genSaltSync(10);
    user.passwd = bcrypt.hashSync(passwd, salt);

    await res.send(UserService.addUser(user));
  } catch (error) {
    next(error);
  }
};

const otra = async (req, res, next) => {
  try {
    res.send(UserService.otra());
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
    const { _id } = req.params;
    res.send(await UserService.deleteFriend(_id));
}catch (error) {
    next(error);
}

}



module.exports = {
  addUser,
  otra,
  addFriend,
  getFriends,
  getFriend,
  deleteFriend
};
