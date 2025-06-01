const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama harus diisi'],
  },
  email: {
    type: String,
    required: [true, 'Email harus diisi'],
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
