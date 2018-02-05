const passport = require('passport');
const crypto = require('crypto');
const mongoose = require('mongoose');
const PoolManager = mongoose.model('PoolManager');
const PoolMember = mongoose.model('PoolMember');
const promisify = require('es6-promisify');
const mail = require('../handlers/mail');

exports.loginUser = passport.authenticate('local', {
  failureRedirect: '/user-login',
  failureFlash: 'Failed Login!',
  successRedirect: '/admin-main',
  successFlash: 'You are now logged in! 👏 👏 👏'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out! 😜');
  // res.redirect('/user-login');
  res.redirect('/');
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