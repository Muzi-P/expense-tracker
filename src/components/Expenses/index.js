import React, { useState } from "react";
// components
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import Card from "../Card";
// styles
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYearFilter={filterChangeHandler}
        filteredYear={filteredYear}
      />
      {expenses.map((expense, index) => (
        <ExpenseItem
          expenseDate={expense.date}
          expenseAmount={expense.amount}
          expenseTitle={expense.title}
          key={index}
        />
      ))}
    </Card>
  );
};

export default Expenses;
