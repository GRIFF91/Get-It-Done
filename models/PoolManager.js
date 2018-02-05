const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const poolManagerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please supply a Manager name'
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please supply an email address'
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }
});

poolManagerSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
poolManagerSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('PoolManager', poolManagerSchema);