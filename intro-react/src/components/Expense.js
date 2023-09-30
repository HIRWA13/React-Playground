import ExpenseItem from './ExpenseItem';
import './ExpenseItem.css'

export default function Expense(props) {
    return (
        <>
            <div>
                {props.item.map((expense) => {
                    return <ExpenseItem 
                                key={expense.id}
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date}/>
                })}
            </div>
        </>
    );
}