import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import uuid from 'react-uuid';

const AddTransactionForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { dispatch } = useContext(GlobalContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    name === 'text' ? setText(value) : setAmount(+value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // generating a random id for new transaction
    const id = uuid();

    dispatch({ type: 'ADD_TRANSACTION', payload: { text, amount, id } });
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
