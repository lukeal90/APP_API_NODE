const UserModel = require('../models/user');

const addUser = (user) => {
  user.save();
};

const checkEmail = (email) => {
  return UserModel.findOne({
    'email' : email
  }).lean()
}

const deleteUser = (user) => {
  return `Usuario: ${user} eliminado`
}

module.exports = {
  addUser,
  deleteUser,
  checkEmail
};
