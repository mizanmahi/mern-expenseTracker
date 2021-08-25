const express = require('express');

const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require('../controllers/transactionController');

const router = express.Router();

router
  .route('/')
  .get(getTransactions)
  .post(addTransactions)
  .delete(deleteTransactions);

module.exports = router;
