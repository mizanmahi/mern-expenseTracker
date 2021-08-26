const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const transactions = require('./routes/transactions');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// connecting to the mongo db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((conn) => {
    console.log(
      `Mongo db connected successfully on ${conn.connection.host}`.white.bold
    );
  });

console.log(  path.resolve(__dirname, 'client', 'build', 'index.html'));


app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client", 'build')));
  app.get('*', (req, res) => {
    return res.sendFile('index.html');
  });
}

app.listen(process.env.PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .white.bold
  )
);
