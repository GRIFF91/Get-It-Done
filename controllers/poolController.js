const mongoose = require('mongoose');
const Pool = mongoose.model('Pool');

exports.createPool = async (req, res) => {
  console.log(req.body);
  const pool = await (new Pool(req.body)).save();
  res.json(pool);
};

exports.getPools = async (req, res) => {
  const pools = await Pool.find();
  res.json(pools);
};

exports.getPool = async (req, res) => {
  const pool = await Pool.findOne({ _id: req.params.id });
  res.json(pool);
}

exports.deletePool = async (req, res) => {
  console.log(req.params.id)
  await Pool.remove({ _id: req.params.id }).exec()
  .then(() => {
    Pool.find().then(pools => res.json(pools));
  })
};