const UserModel = require('../models/user');

const addUser = (user) => {
  user.save();
};

const otra = () => {
 return 'Funciono otra';
};

const checkEmail = (email) => {
  return UserModel.findOne({
    'email' : email
  }).lean()
}

const deleteUser = (user) => {
  return `Usuario: ${user} eliminado`
}

const addFriend = (idU, idF) => {
  const user = UserModel.find({_id: idU})
  user.friends.push( idF );
  
}


const deleteFriend = (idU) => {
 return UserModel.friends.DeleteOne({id: idU});
}

const getFriend = (idU, idF) =>{
  const user = UserModel.find({_id: idU})
  return user.friends.findOne(idF ).exec();
}

const getFriends = (idU) =>{
  User = UserModel.find({_id: idU})
  return  User.UserModel.friends.find().exec();
}

module.exports = {
  addUser,
  addFriend,
  deleteFriend,
  getFriend,
  getFriends,
  otra,
  deleteUser,
  checkEmail
};
