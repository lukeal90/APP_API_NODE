const { Router } = require('express');
const router = Router();
const schema = require('../../schemas/user');
const validate = require('../middlewares/validate');
const UserController = require('../../controllers/user');
const { id } = require('../../schemas/user');

router.put('/friends/addfriend/',UserController.addFriend);
router.delete('/friends/deletefriend',UserController.deleteFriend)
router.get('/friends/getfriend/:id',UserController.getFriend)
router.get('/friends/getfriends/:id',UserController.getFriends)
router.put('/',validate(schema), UserController.addUser);
router.delete('/:id', UserController.deleteUser);
router.get('/movies/getmovies/:id', UserController.getMovies);
router.post('/movies/addmovie', UserController.addMovie);
router.delete('/movies/deletemovie', UserController.deleteMovie);

module.exports = router;
