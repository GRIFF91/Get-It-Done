const mongoose = require('mongoose');
// const promisify = require('es6-promisify');
const util = require('util');
const PoolManager = mongoose.model('PoolManager');
const PoolMember = mongoose.model('PoolMember');


// To register a new user, must validate the information first
exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  req.checkBody('email', 'That email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Confirm Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Oops! Your passwords do not match!').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    console.log(errors)
    // req.flash('error', errors.map(err => err.msg ));
    return;
  }
  next();
};

exports.registerPoolManager = async (req, res) => {
  console.log(`New Pool Manager: ${req.body.name}`);
  const PM = new PoolManager(req.body);

  // PoolManager.register method comes from the passportLocalMongoose package
  PoolManager.register(PM, req.body.password, (err) => {
    if (err) throw err;
    console.log(`${req.body.name} is now registered! 😃`);
    res.redirect('/');

  });
};

exports.userData = (req, res) => {
  res.json(req.user);
}


