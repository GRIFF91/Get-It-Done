const mongoose = require('mongoose');
const Chore = mongoose.model('Chore');

exports.addChore = async (req, res) => {
  const chore = await (new Chore(req.body)).save();
  res.json(chore);
};