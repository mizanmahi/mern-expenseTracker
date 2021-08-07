import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transaction.map((transaction) => (
          <Transaction
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            id={transaction.id}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
