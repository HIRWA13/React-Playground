import { useState } from 'react'

import './ExpenseForm.css'

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleHangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput(prev => {
        //     return {...prev, enteredTitle: event.title.value}
        // })
    }

    const amountChangedHandler =(event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput(prev => {
        //     return {...prev, enteredAmount: event.title.value}
        // })
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput(prev => {
        //     return {...prev, enteredDate: event.target.value}
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                    type='text' 
                    onChange={titleHangeHandler}
                    value={enteredTitle}
                    />
            </div>
            <div className='new-expense__control'>
                <label>amount</label>
                <input 
                    type='number' 
                    min='0.01' 
                    step='0.01' 
                    onChange={amountChangedHandler}
                    value={enteredAmount}
                    />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                    type='date' 
                    min='2019-01-01' 
                    max='2022-12-31'
                    onChange={dateChangedHandler}
                    value={enteredDate}
                     />
            </div>
        </div>
        <div className='new-expenses__actions'> 
            <button type='submit'>submit</button>
        </div>
    </form>
}