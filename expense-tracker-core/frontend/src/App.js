import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filters from './components/Filters';
import Dashboard from './components/Dashboard';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filters, setFilters] = useState({ category: '', from: '', to: '' });

  const fetchExpenses = async (query = {}) => {
    try {
      const params = new URLSearchParams();
      if (query.category) params.append('category', query.category);
      if (query.from) params.append('from', query.from);
      if (query.to) params.append('to', query.to);
      const res = await axios.get(`${API}/api/expenses?${params.toString()}`);
      setExpenses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExpenses(filters);
  }, []); // initial load

  const handleFilter = (f) => {
    setFilters(f);
    fetchExpenses(f);
  };

  return (
    <div className="container">
      <h1>Personal Expense Tracker</h1>
      <div className="grid">
        <div className="card">
          <AddExpenseForm onAdded={() => fetchExpenses(filters)} />
        </div>
        <div className="card">
          <Filters onFilter={handleFilter} />
          <Dashboard expenses={expenses} />
        </div>
      </div>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
