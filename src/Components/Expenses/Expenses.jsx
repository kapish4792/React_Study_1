import React, { useState } from 'react';
// import ExpenceItem from './ExpenceItem';
// import { DUMMY_EXPENSES } from '../../expenses';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

export default function Expenses({ items }) {
  const [filterdYear, setFilterdYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filterdYear}
        onChangeByFilter={filterChangeHandler}
      />
      {/* {!filteredExpenses.length ? (
        <h2 style={{ textAlign: 'center', color: '#fff' }}>No data</h2>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenceItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />

      {/* <ExpenseList expenses={DUMMY_EXPENSES} /> */}
    </Card>
  );
}
