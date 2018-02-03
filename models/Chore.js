const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const choreSchema = new mongoose.Schema({
  name: {
    type: String,
    trim:true
  },
  description: {
    type: String,
    trim: true
  }
});

module.exports = mongose.model('Chore', choreSchema);