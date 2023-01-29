import React from 'react';
import './ExpenseDate.css';
export default function Calender({ date }) {
  const month = date.toLocaleString('en-IN', { month: 'long' });
  const year = date.toLocaleString('en-IN', { year: 'numeric' });
  const day = date.toLocaleString('en-IN', { day: 'numeric' });
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
