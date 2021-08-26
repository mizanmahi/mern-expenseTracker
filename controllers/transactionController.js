const mongoose = require('mongoose');
const TransactionSchema = require('../models/Transaction');

const Transaction = new mongoose.model('Transaction', TransactionSchema);

// @desc Get all transactions
// @route GET api/v1/transactions

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({});
    res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

// @desc  Save a transactions
// @route POST api/v1/transactions
exports.addTransactions = async (req, res, next) => {
  const newTrtansaction = new Transaction(req.body);
  try {
    const savedTransaction = await newTrtansaction.save();
    res.status(201).send({ success: true, data: savedTransaction });
  } catch (err) {
    res.status(400).send({ success: false, error: err.message });
  }
};

exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(404).json({
        success: false,
        error: 'No such transaction',
      });
    }
    await transaction.remove();
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'There is error on serverside',
    });
  }
};
