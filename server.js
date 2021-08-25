const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const transactions = require('./routes/transactions');

const app = express();

dotenv.config({ path: './config/config.env' });

app.use('/api/v1/transactions', transactions)

app.listen(process.env.PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .red.bold
  )
);
