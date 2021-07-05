const { Router } = require('express');
const { validate, validateJWT } = require('../middlewares')
const UserController = require('../../controllers/user');
const schema = require('../../schemas/user');
const router = Router();

router.put('/',validate(schema), UserController.addUser);
router.delete('/:id',validateJWT, UserController.deleteUser);
router.put('/friends/addfriend/',validateJWT,UserController.addFriend);
router.delete('/friends/deletefriend/',validateJWT,UserController.deleteFriend)
router.get('/friends/getfriends/:id',validateJWT, UserController.getFriends)
router.put('/movies/addmovie',validateJWT, UserController.addMovie);
router.delete('/movies/deletemovie/',validateJWT, UserController.deleteMovie);
router.get('/movies/getmovies/:id',validateJWT, UserController.getMovies);
router.get('/friends/searchuserbyname/:name',validateJWT,UserController.searchUserByName)

module.exports = router;
