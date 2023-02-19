import '../css/newExpense/formexpense.css';

import { useState } from 'react';
const FormExpense = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //alternatively
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);

        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         title: e.target.value
        //     }
        // });
    }

    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value);
        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         amount: e.target.value
        //     }
        // });
    }

    const dateChangeHandler = e => {
        setEnteredDate(e.target.value);
        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         date: e.target.value
        //     }
        // })
    }
    const submitHandler = e => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>

        </form>
    );
}

export default FormExpense;