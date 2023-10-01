import { useState } from "react";

import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";


function App() {
  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = (expense) => {
    console.log(expense)
    setExpenses(prev => {
      return [expense, ...prev]
    })
  }

  return (
    <>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expense item={expenses}/>
    </>     
  );
}

export default App;
