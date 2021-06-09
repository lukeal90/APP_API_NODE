const UserService = require('../services/user');
const User = require('../models/user');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const addUser = async (req, res, next) => {
  try {
    const { name, email, passwd, friends } = req.body;
    const state = true;
    const user = new User({name,email,passwd, friends, state});
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
    const { id } = req.params;
    res.json({
      'id': id,
      'msg': 'Se borro el usuario'
    })
    
   // Terminar de implementar => Cambiar state de user to false. 
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
  addFriend,
  getFriends,
  getFriend,
  deleteFriend,
  deleteUser
};
