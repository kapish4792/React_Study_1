import React from 'react';
import './ExpenseItem.css';
import Calender from './Calender';
import Card from '../UI/Card';

export default function ExpenceItem({ title, amount, date }) {
  // const [Title, setTitle] = useState(title);

  // const updateTitle = () => {
  //   setTitle('Updated!!');
  // };
  return (
    <li>
      <Card className='expense-item'>
        <Calender date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>₹{amount}</div>
          {/* <button onClick={updateTitle}>Update title</button> */}
        </div>
      </Card>
    </li>
  );
}
