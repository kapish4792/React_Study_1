import React from 'react';
import ExpenceItem from './ExpenceItem';
import './ExpenseList.css';
// export default function ExpenseList({ expenses }) {
//   // const ExpenseListComponents = expenses.map((expense, i) => {
//   //   return (
//   //     <ExpenceItem
//   //       key={expense.id}
//   //       title={expense.title}
//   //       amount={expense.amount}
//   //       date={expense.date}
//   //     />
//   //     <ExpenceItem
//   //       key={i}
//   //       title={expenses[i].title}
//   //       amount={expenses[i].amount}
//   //       date={expenses[i].date}
//   //     />
//   //   );
//   // });
//   return (
//     <div>
//       {expenses.map((expense) => {
//         return (
//           <ExpenceItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         );
//       })}
//     </div>
//   );
// }
export default function ExpenseList({ items }) {
  if (items.length === 0) {
    return <h1 className='expenses-list__fallback'>No Expense Found...!!</h1>;
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => (
        <ExpenceItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
