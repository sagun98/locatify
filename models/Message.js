const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    text: String,
    created: {
      type: Date,
      default: Date.now
    },
    hasSeen: {
      type: Boolean,
      default: false
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    channel: {
      type: mongoose.Schema.ObjectId,
      ref: 'Channel'
    }
  },
  {
    toJSON: { virtuals: true }
  }
);

module.exports = mongoose.model('Message', messageSchema);
