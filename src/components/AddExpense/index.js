import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import "./AddExpense.css";
const AddExpense = ({ addExpenses }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    addExpenses(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelEdit={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default AddExpense;
