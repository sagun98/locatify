const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScehma = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Email is required'
  },
  username: {
    type: String,
    required: 'Name is required',
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userScehma);
