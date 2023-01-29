import React from 'react';
import ExpenceItem from './ExpenceItem';
export default function ExpenseList({ expenses }) {
  // const ExpenseListComponents = expenses.map((expense, i) => {
  //   return (
  //     <ExpenceItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //     <ExpenceItem
  //       key={i}
  //       title={expenses[i].title}
  //       amount={expenses[i].amount}
  //       date={expenses[i].date}
  //     />
  //   );
  // });
  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenceItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}
