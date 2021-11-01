import React from "react";
import ExpanseDate from "../ExpanseDate";
import Card from "../Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenseDate, expenseAmount, expenseTitle }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpanseDate expenseDate={expenseDate} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
