const passport = require('passport');
const crypto = require('crypto');
const mongoose = require('mongoose');
const PoolManager = mongoose.model('PoolManager');
const PoolMember = mongoose.model('PoolMember');
const promisify = require('es6-promisify');
// const mail = require('../handlers/mail');

exports.loginUser = passport.authenticate('local', {
  failureRedirect: '/failure',
  successRedirect: '/success'
});

exports.logout = (req, res) => {
  req.logout();
  res.json('loggedOut');
};

exports.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    next();
    return;
  }
  req.flash('error', 'Oops! You must be logged in to do that!');
  // res.redirect('/user-login');
  res.redirect('/');
};