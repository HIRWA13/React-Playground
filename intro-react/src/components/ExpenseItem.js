import './ExpenseItem.css'

function ExpenseItem(props){
    return (
    <div className="expense-item">
        <div className="expense-item__date">{props.date.toISOString()}</div>
        <div className="expense-item__item">
            <h2 className="expense-item__item-title">{props.title}</h2>
        </div>
        <div className="expense-item__amount">${props.amount}</div>
    </div>
    );
}

export default ExpenseItem;