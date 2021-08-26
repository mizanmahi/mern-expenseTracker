import axios from 'axios';
import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';
import { numberWithCommas } from '../utils/format';

const Transaction = ({ text, amount, id }) => {
  const { dispatch } = useContext(GlobalContext);

  const deleteHandler = async () => {
    try {
      await axios.delete(`api/v1/transactions/${id}`);
      dispatch({ type: 'DELETE_ITEM', payload: id });
    } catch (err) {
      dispatch({ type: 'TRANSACTION_ERROR', payload: err.message });
    }
  };

  return (
    <div>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text} <span>{numberWithCommas(amount)} Tk</span>
        <button className='delete-btn' onClick={deleteHandler}>
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
