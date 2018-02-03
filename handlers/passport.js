const passport = require('passport');
const mongoose = require('mongoose');
const PoolManager = mongoose.model('PoolManager');

passport.use(PoolManager.createStrategy());

passport.serializeUser(PoolManager.serializeUser());
passport.deserializeUser(PoolManager.deserializeUser()); 