const { Router } = require('express');
const schema = require('../../schemas/user');
// const { validateJWT } = require('../middlewares/validate-jwt')
// const validate = require('../middlewares/validate');
const { validate, validateJWT } = require('../middlewares')
const UserController = require('../../controllers/user');
const { id } = require('../../schemas/user');
const router = Router();

router.put('/friends/addfriend/',UserController.addFriend);
router.delete('/friends/deletefriend/:id',UserController.deleteFriend)
router.get('/friends/getfriend/:id',UserController.getFriend)
router.get('/friends/getfriends',UserController.getFriends)
router.put('/',validate(schema), UserController.addUser);
router.delete('/:id',validateJWT, UserController.deleteUser);
router.get('/movies/getmovies/:id', UserController.getMovies);
router.post('/movies/addmovie', UserController.addMovie);
router.delete('/movies/deletemovie/:id', UserController.deleteMovie);

module.exports = router;
