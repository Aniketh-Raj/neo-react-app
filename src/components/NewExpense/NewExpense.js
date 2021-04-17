import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

const NewExpense = (props) => {

  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    
    props.onExpenseAdded(expenseData);
    setEditing(false);
  }

  const setIsEditingHandler = () => {
    setEditing(true)
  }

  const cancelIsEditingHandler = () => {
    setEditing(false)
  }

  return (
      <div className = "new-expense">
          {!isEditing && <button onClick = {setIsEditingHandler} >Add New Expense</button>} 
          {isEditing && <ExpenseForm cancelEditing = {cancelIsEditingHandler} onSaveExpenseData = {saveExpenseDataHandler} />}
      </div>
  );
};

export default NewExpense;
