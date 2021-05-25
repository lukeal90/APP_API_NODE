const { Router } = require('express');
const router = Router();

const UserController = require('../../controllers/user');

router.get('/', UserController.prueba);
router.get('/otra', UserController.otra);

module.exports = router;
