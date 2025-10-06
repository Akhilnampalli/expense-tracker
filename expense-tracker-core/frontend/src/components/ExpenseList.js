import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h3>Expenses</h3>
      <table>
        <thead>
          <tr><th>Amount (₹)</th><th>Category</th><th>Date</th><th>Notes</th></tr>
        </thead>
        <tbody>
          {expenses.length === 0 && (
            <tr><td colSpan="4" style={{textAlign:'center'}}>No expenses found</td></tr>
          )}
          {expenses.map(exp => (
            <tr key={exp._id}>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>{new Date(exp.date).toLocaleDateString()}</td>
              <td>{exp.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
