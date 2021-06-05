const UserService = require('../services/user');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

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

module.exports = {
  addUser,
  otra,
};
