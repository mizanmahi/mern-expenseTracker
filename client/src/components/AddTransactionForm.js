import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';

const AddTransactionForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { dispatch } = useContext(GlobalContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    name === 'text' ? setText(value) : setAmount(+value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      'Content-Type': 'application/json',
    };

    try {
      const res = await axios.post(
        '/api/v1/transactions',
        {
          text,
          amount,
        },
        config
      );
      dispatch({ type: 'ADD_TRANSACTION', payload: res.data.data });
      setAmount('');
      setText('');
    } catch (err) {
      dispatch({ type: 'TRANSACTION_ERROR', payload: err.message });
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={submitHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            value={text}
            type='text'
            placeholder='Enter text...'
            name='text'
            onChange={changeHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            type='number'
            placeholder='Enter amount...'
            onChange={changeHandler}
            name='amount'
          />
        </div>

        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransactionForm;
