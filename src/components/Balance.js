import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Balance = () => {
  const { transaction } = useContext(GlobalContext);
  
  let total = 0
  for(const trans of transaction){
    total += trans.amount;
  }

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  );
};

export default Balance;
