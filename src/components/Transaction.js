import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Transaction = ({ text, amount, id }) => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text} <span>{amount}$</span>
        <button className='delete-btn' onClick={() => dispatch({type: "DELETE_ITEM", payload: id})}>x</button>
      </li>
    </div>
  );
};

export default Transaction;
