const { Router } = require('express');
const router = Router();
const schema = require('../../schemas/user');
const validate = require('../middlewares/validate');
const UserController = require('../../controllers/user');

router.get('/adduser',validate(schema), UserController.addUser);
router.put('/friends/addfriend/',UserController.addFriend);
router.delete('/friends/deletefriend/:id',UserController.deleteFriend)
router.get('/friends/getfriend/:id',UserController.getFriend)
router.get('/friends/getfriends',UserController.getFriends)
router.put('/',validate(schema), UserController.addUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
