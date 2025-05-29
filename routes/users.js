const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  updateUsers,
  deleteUsers,
  createUsers,
} = require('../controller/users');

router.get('/', getAllUsers);
router.post('/', createUsers);
router.put('/:id', updateUsers);
router.delete('/:id', deleteUsers);

module.exports = router;
