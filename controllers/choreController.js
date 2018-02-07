const mongoose = require('mongoose');
const Chore = mongoose.model('Chore');

exports.addChore = async (req, res) => {
  const chore = await (new Chore(req.body)).save();
  res.json(chore);
};

exports.getAll = async (req, res) => {
  const chores = await Chore.find();
  res.json(chores);
};