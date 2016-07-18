const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  whatTylerSays: { type: String, required: true},
  dateSaid: { type: Date, default: Date.now },
  count: { type: Number, default: 0 }
});

module.exports = mongoose.model('Quote', quoteSchema);
