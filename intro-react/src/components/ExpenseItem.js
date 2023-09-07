import './ExpenseItem.css'

function ExpenseItem(){
    const transactionDate = new Date(2021, 2, 28);
    const item = 'Car insurance';
    const amount = 296;
    return (
    <div className="expense-item">
        <div className="expense-item__date">{transactionDate.toISOString()}</div>
        <div className="expense-item__item">
            <h2 className="expense-item__item-title">{item}</h2>
        </div>
        <div className="expense-item__amount">${amount}</div>
    </div>
    );
}

export default ExpenseItem;