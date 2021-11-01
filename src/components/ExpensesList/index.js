import ExpenseItem from "../ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <div className="expenses-list__fallback">Found no expenses.</div>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem
          expenseDate={expense.date}
          expenseAmount={expense.amount}
          expenseTitle={expense.title}
          key={index}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
