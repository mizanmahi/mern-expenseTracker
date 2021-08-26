const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please Add Some Text'],
  },
  amount: {
    type: Number,
    require: [true, 'Please add a positive or negative number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = TransactionSchema;
