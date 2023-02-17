import ExpenseDate from './ExpenseDate';
import '../css/Expenses_css/expenseItem.css';
import Card from '../UI/Card';
import React from 'react';
const ExpenseItems = props => {
    const [title, changeTitle] = React.useState(props.title);
    const clickHandler = () => {
        changeTitle('updated');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.ammount}</div>
            </div>
            <button onClick={clickHandler }>Change title</button>
        </Card>
    );
}

export default ExpenseItems;