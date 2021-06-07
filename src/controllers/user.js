const UserService = require('../services/user');
const User = require('../models/user');
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
    
   // res.send(await UserService.deleteUser());
  } catch (error) {
    next(error);
  }
};



module.exports = {
  addUser,
  deleteUser
};
