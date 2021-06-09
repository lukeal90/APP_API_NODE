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
  User = UserModel.find({_id: idU})
  User.friends.push( idF );
  
}


const deleteFriend = (idU) => {
 UserModel.friends.DeleteOne({id: idU});
}

const getFriend = (idU, idF) =>{
  User = UserModel.find({_id: idU})
  return User.friends.findOne(idF ).exec();
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
