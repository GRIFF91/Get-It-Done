const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please supply a Team name'
  },
  poolManagers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PoolManager'
  }],
  poolMember: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PoolMembers'
  }]
});

module.exports = mongoose.model('Team', teamSchema);