import React from 'react';

const Dashboard = ({ expenses }) => {
  const total = expenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  const byCategory = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount || 0);
    return acc;
  }, {});
  return (
    <div className="summary">
      <h3>Summary</h3>
      <p><strong>Total:</strong> ₹{total.toFixed(2)}</p>
      <div>
        <strong>By Category</strong>
        <ul>
          {Object.keys(byCategory).length === 0 && <li>No data</li>}
          {Object.entries(byCategory).map(([cat, amt]) => (
            <li key={cat}>{cat}: ₹{amt.toFixed(2)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
