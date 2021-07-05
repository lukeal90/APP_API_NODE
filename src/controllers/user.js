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
    if(await UserService.deleteUser(req.params.id) === null) {
      res.status(400).json({
        msg: "User not found"
      })
    }else{
      res.status(200).json({
        msg: "User deleted"
      })
    }    
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

    const user = await UserService.searchUserById(_id);

    if( user === null){
      res.status(400).json({
        msg: "User not found"
      })
    }else{
      UserService.addFriend(user, idFriend)
      res.status(200).json({
        msg: "Friend added"
      })
    }
  } catch (error) {
    next(error)
  }

}

const getFriends = async (req, res, next) => {
  try {
    
    const user = await UserService.searchUserById(req.params.id);
    if(user === null){
      res.status(400).json({
        msg: "User not found"
      })
    }else{
      res.send( await UserService.getFriends(user));
    }
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
    const user = await UserService.searchUserById(_id); 

    if(user === null || user.friends.length === 0) {
      res.status(400).json({})
    }else{
      UserService.deleteFriend(user, idFriend)
      res.status(200).json({})
    }
  
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

    const user = await UserService.searchUserById(_id); 
    
    if(user === null) {
      res.status(400).json({})
    }else{
      UserService.addMovie(user, movie)
      res.status(200).json({})
    }

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

    const user = await UserService.searchUserById(_id); 

    if(user === null || user.movies.length === 0) {
      res.status(400).json({})
    }else{
      UserService.deleteMovie(user, movie)
      res.status(200).json({})
    }

  } catch (error) {
    next(error);
  }
}


const getMovies = async (req, res, next) => {
  try {

    const user = await UserService.searchUserById(req.params.id); 

    if(user === null) {
      res.status(400).json({})
    }else{
      res.send( await UserService.getMovies(user))
    }

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