const UserService = require('../services/user');

const prueba = async (req, res, next) => {
  try {
    res.send(UserService.prueba());
  } catch (error) {
    next(error);
  }
};

const otra = async (req, res, next) => {
  try {
    res.send('Funciona otra');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  prueba,
  otra,
};
