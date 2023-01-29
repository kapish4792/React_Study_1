import React, { useState } from 'react';
// import ExpenceItem from './ExpenceItem';
import { DUMMY_EXPENSES } from '../../expenses';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

import './Expenses.css';

export default function Expenses() {
  const [filterdYear, setFilterdYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filterdYear}
        onChangeByFilter={filterChangeHandler}
      />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </Card>
  );
}
