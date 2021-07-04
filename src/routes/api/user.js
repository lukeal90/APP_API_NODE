const { Router } = require('express');
const { validate, validateJWT } = require('../middlewares')
const UserController = require('../../controllers/user');
const schema = require('../../schemas/user');
const router = Router();

router.put('/friends/addfriend/',validateJWT,UserController.addFriend);
router.delete('/friends/deletefriend/:id',validateJWT,UserController.deleteFriend)
router.get('/friends/getfriend/:id',validateJWT,UserController.getFriend)
router.get('/friends/getfriends',validateJWT,UserController.getFriends)
router.put('/',validate(schema), UserController.addUser);
router.delete('/:id',validateJWT,validateJWT, UserController.deleteUser);
router.get('/movies/getmovies/:id',validateJWT, UserController.getMovies);
router.post('/movies/addmovie',validateJWT, UserController.addMovie);
router.delete('/movies/deletemovie/:id',validateJWT, UserController.deleteMovie);

module.exports = router;
