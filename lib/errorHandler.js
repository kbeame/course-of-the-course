module.exports = function(err, res) {
  console.log(err);
  return res.status(500).json({ msg: 'Error with Server'});
};
