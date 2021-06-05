const { Router } = require('express');
const router = Router();
const schema = require('../../schemas/user');
const validate = require('../middlewares/validate');
const UserController = require('../../controllers/user');

router.get('/adduser',validate(schema), UserController.addUser);
router.get('/otra', UserController.otra);


module.exports = router;
