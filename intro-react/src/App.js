import ExpenseItem from "./components/ExpenseItem";
import Avatar  from "./components/Avatar";

function App() {
  const expenses = [
    { id: 1, title: "Car Insurance", date:new Date(2022, 2, 28), amount: 248 },
    { id: 2, title: "Rent", date: new Date(2023, 4, 12), amount: 400 },
    { id: 3, title: "Food", date: new Date(2021, 1, 1), amount: 34 },
  ];
  return (
    <div>
      <Avatar></Avatar>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
