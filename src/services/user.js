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

const addFriend =  (idU, idF) => {
  const user =  UserModel.findById(idU).exec();
 //const user = UserModel.findByIdAndUpdate(idU, {"$push":{"friends": idF}}, {"new":true,"upsert":true});

  user.friends.push(idF);
  user.save();

}


const deleteFriend =  (idU,idF) => {
  const user = UserModel.findById(idU).exec();
  user.friends.findOneAndDelete(idF);
  user.save();
}

const getFriend = (idU, idF) =>{
  const user = UserModel.findById(idU)
  return user.friends.findOne(idF).exec();
}

const getFriends = (idU) =>{
  const user =  UserModel.findById(idU).exec();
  return user.UserModel.friends.find().exec();
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
