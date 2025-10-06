import React, { useState } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const AddExpenseForm = ({ onAdded }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/expenses`, {
        amount: Number(amount),
        category, date: date || new Date().toISOString(), notes
      });
      setAmount(''); setNotes(''); setDate('');
      if (onAdded) onAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <form onSubmit={submit}>
        <input type="number" step="0.01" placeholder="Amount (₹)" value={amount} onChange={e => setAmount(e.target.value)} required />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Others</option>
        </select>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input placeholder="Notes (optional)" value={notes} onChange={e => setNotes(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
