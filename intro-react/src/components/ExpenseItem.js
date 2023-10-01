import './ExpenseItem.css'

function ExpenseItem(props){
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();

    return (
    <div className="expense-item">
        <div className="expense-item__date">
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
        </div>
        <div className="expense-item__item">
            <h2 className="expense-item__item-title">{props.title}</h2>
        </div>
        <div className="expense-item__amount">${props.amount}</div>
    </div>
    );
}

export default ExpenseItem;