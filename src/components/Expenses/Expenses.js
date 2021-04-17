import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const expenseFilterChangedHandler = (expenseFilterYear) => {
    setFilteredYear(expenseFilterYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onExpenseFilterChanged={expenseFilterChangedHandler}
      />
      <ExpensesChart expenses = {filteredExpenses}/> 
      <ExpensesList filteredExpensesList = {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
