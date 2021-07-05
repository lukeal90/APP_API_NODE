const UserService = require('../services/user');
const User = require('../models/user');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const { ERROR } = require('../../helpers')

const addUser = async (req, res, next) => {
  try {
    const {
      name,
      email,
      passwd
    } = req.body;
    const userEmail = await UserService.checkEmail(email);
    const userName = await User.findOne({
      name: name
    });

    if (userName !== null || userEmail) {
      return res.status(400).json({
        msg: ERROR.ERROR_SIGNUP
      })
    }

    const user = new User({
      name,
      email,
      passwd
    });

    const salt = bcryptjs.genSaltSync(10);
    user.passwd = bcryptjs.hashSync(passwd, salt);

    UserService.addUser(user);
    res.status(201).json({
      msg: "Success"
    })
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        msg: ERROR.INVALID_DATA
      })
    }
    res.send(await UserService.deleteUser(req.params.id));
  } catch (error) {
    next(error);
  }
};

const addFriend = async (req, res, next) => {
  try {
    const {
      _id,
      idFriend
    } = req.body;
    res.send(await UserService.addFriend(_id, idFriend))
  } catch (error) {
    next(error)
  }

}

const getFriends = async (req, res, next) => {
  try {
    res.send(await UserService.getFriends(req.params.id));
  } catch (error) {
    next(error)
  }

}

const searchUserByName = async (req, res, next) => {
  try {
    res.send(await UserService.searchUserByName(req.params.name))
  } catch (error) {
    next(error);
  }

}

const deleteFriend = async (req, res, next) => {
  try {
    const {
      _id,
      idFriend
    } = req.body;
    res.send(await UserService.deleteFriend(_id, idFriend));
  } catch (error) {
    next(error);
  }
}

const addMovie = async (req, res, next) => {
  try {
    const {
      _id,
      movie
    } = req.body;
    res.send(await UserService.addMovie(_id, movie));
  } catch (error) {
    next(error);
  }

}

const deleteMovie = async (req, res, next) => {
  try {
    const {
      _id,
      movie
    } = req.body;
    res.send(await UserService.deleteMovie(_id, movie))
  } catch (error) {
    next(error);
  }
}


const getMovies = async (req, res, next) => {
  try {
    res.send(await UserService.getMovies(req.params.id));
  } catch (error) {
    next(error);
  }
}


module.exports = {
  addUser,
  deleteUser,
  addFriend,
  getFriends,
  deleteFriend,
  searchUserByName,
  deleteUser,
  addMovie,
  deleteMovie,
  getMovies
};