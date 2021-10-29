import React from "react";
import ExpenseForm from "../ExpenseForm";
import "./AddExpense.css";
const AddExpense = ({ addExpenses }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    addExpenses(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default AddExpense;
