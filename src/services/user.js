const fetch = require('node-fetch');

const addUser = (user) => {
  user.save();
};

const otra = () => {
  return 'Funciono otra';
};

module.exports = {
  addUser,
  otra,
};
