import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';
import './AppTitle.css';

const DUMMY_STATE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = (props) => {

  const [expenses, setExpense] = useState(DUMMY_STATE);

  const addExpenseHandler = (expenseData) => {
    setExpense(prevState => {
      return [expenseData, ...prevState]
    })
  }

  

  return (
    <div>
      <h2 className="title">Expense Tracker</h2>
      <NewExpense onExpenseAdded = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
