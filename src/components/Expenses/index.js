import React from "react";
import ExpenseItem from "../ExpenseItem";
import Card from "../Card";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          expenseDate={expense.date}
          expenseAmount={expense.amount}
          expenseTitle={expense.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
