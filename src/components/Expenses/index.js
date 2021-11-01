import React, { useState } from "react";
// components
import ExpensesFilter from "../ExpensesFilter";
import Card from "../Card";
import ExpensesList from "../ExpensesList";
// styles
import "./Expenses.css";
import ExpensesChart from "../ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYearFilter={filterChangeHandler}
        filteredYear={filteredYear}
      />
      {filteredExpenses.length !== 0 && (
        <ExpensesChart filteredExpenses={filteredExpenses} />
      )}
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
