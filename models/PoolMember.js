const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const poolMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please supply a Member name'
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }
});

module.exports = mongoose.model('PoolMember', poolMemberSchema);