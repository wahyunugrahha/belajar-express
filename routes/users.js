const express = require('express');
const { userInfo } = require('os');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET semua user');
});

router.post('/', (req, res) => {
  res.send(`POST user baru: ${JSON.stringify(user)}`);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;
  res.send(`PUT update user ${id}: ${JSON.stringify(updated)}`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`DELET user dengan id ${id}`);
});

module.exports = router;
