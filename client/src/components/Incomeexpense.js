import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext';
import { numberWithCommas } from "../utils/format"

const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);


  let income = transaction
    .map((trans) => trans.amount)
    .filter((trans) => trans > 0)
    .reduce((acc, curr) => acc + curr, 0).toFixed(2);

  let expense = transaction
    .map((trans) => trans.amount)
    .filter((trans) => trans < 0)
    .reduce((acc, curr) => acc + curr, 0).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>Tk {numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>Tk {numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
