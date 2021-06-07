const { Router } = require('express');
const router = Router();
const schema = require('../../schemas/user');
const validate = require('../middlewares/validate');
const UserController = require('../../controllers/user');


router.put('/',validate(schema), UserController.addUser);
router.delete('/:id', UserController.deleteUser);




module.exports = router;
