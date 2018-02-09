const mongoose = require('mongoose');
const Pool = mongoose.model('Pool');

exports.createPool = async (req, res) => {
  const pool = await (new Pool(req.body)).save();
  res.json(pool);
};

exports.getPools = async (req, res) => {
  const pools = await Pool.find();
  res.json(pools);
};