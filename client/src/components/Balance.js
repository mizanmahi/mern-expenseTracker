import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { numberWithCommas } from "../utils/format"

const Balance = () => {
  const { transaction } = useContext(GlobalContext);
  
  let total = 0
  for(const trans of transaction){
    total += trans.amount;
  }

  return (
    <>
      <h4>Your Balance</h4>
      <h1>Tk {numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
