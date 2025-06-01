const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController');
const checkApiKey = require('../middleware/checkApiKey');

router.use(checkApiKey);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUsers);
router.put('/:id', userController.updateUsers);
router.delete('/:id', userController.deleteUsers);

module.exports = router;
