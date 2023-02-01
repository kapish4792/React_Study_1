import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm({ onSaveExpenseData, onCancel }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredTitle: e.target.value,
    //  });
    //  setUserInput((prevState) => {
    //    return { ...prevState, enteredTitle: e.target.value };
    //  });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredAmount: e.target.value,
    //  });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    //  setUserInput({
    //    ...userInput,
    //    enteredDate: e.target.value,
    //  });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    //  console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.1'
            step='0.1'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='23-02-21'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
