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
  name: {
    type: String,
    required: 'Name is required',
    trim: true
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [
      {
        type: Number,
        required: 'Coordinates are required!'
      }
    ],
    address: {
      type: String,
      required: 'Author is required'
    }
  }
});

module.exports = mongoose.model('User', userScehma);
