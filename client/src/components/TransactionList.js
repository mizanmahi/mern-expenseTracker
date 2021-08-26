import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transaction, dispatch } = useContext(GlobalContext);

  async function getTransactions() {
    try {
      const data = await axios.get('/api/v1/transactions');
      dispatch({ type: 'GET_TRANSACTION', payload: data });
    } catch (err) {
      dispatch({ type: 'TRANSACTION_ERROR', payload: err.message });
    }
  }

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transaction.map((transaction) => (
          <Transaction
            key={transaction._id}
            text={transaction.text}
            amount={transaction.amount}
            id={transaction._id}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
