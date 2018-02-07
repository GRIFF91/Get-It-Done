const mongoose = require('mongoose');
const Pool = mongoose.model('Pool');

exports.createPool = async (req, res) => {
  const pool = await (new Pool(req.body)).save();
  res.json(pool);
};