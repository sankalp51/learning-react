import Card from '../UI/Card';
import '../css/Expenses_css/expenses.css';
import ExpenseItems from './ExpenseItems';

const Expenses = props => {
    return (
        <Card className='expenses'>
            <ExpenseItems
                title={props.data[0].title}
                ammount={props.data[0].amount}
                date={props.data[0].date}
                id={props.data[0].id}
            />
            <ExpenseItems
                title={props.data[1].title}
                ammount={props.data[1].amount}
                date={props.data[1].date}
                id={props.data[1].id}
            />
            <ExpenseItems
                title={props.data[2].title}
                ammount={props.data[2].amount}
                date={props.data[2].date}
                id={props.data[2].id}
            />
            <ExpenseItems
                title={props.data[3].title}
                ammount={props.data[3].amount}
                date={props.data[3].date}
                id={props.data[3].id}
            />
        </Card>
    );
}

export default Expenses;