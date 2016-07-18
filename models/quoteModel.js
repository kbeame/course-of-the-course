const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  saying: { type: String, required: true},
  dateSaid: { type: Date, default: Date.now },
  totalCount: { type: Number, default: 0 }
});

// Note that you should try to get individual date data with each quote

module.exports = mongoose.model('Quote', quoteSchema);
