const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
  name: { type: String, unique: true },
  between: Array
});

module.exports = mongoose.model('Channel', channelSchema);
