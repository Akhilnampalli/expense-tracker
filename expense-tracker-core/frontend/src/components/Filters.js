import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const apply = (e) => {
    e.preventDefault();
    if (onFilter) onFilter({ category, from, to });
  };

  const reset = (e) => {
    e.preventDefault();
    setCategory(''); setFrom(''); setTo('');
    if (onFilter) onFilter({ category:'', from:'', to:'' });
  };

  return (
    <div>
      <h3>Filters</h3>
      <form>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value=''>All Categories</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Others</option>
        </select>
        <label>From</label>
        <input type="date" value={from} onChange={e => setFrom(e.target.value)} />
        <label>To</label>
        <input type="date" value={to} onChange={e => setTo(e.target.value)} />
        <div style={{marginTop:8}}>
          <button onClick={apply}>Apply</button>
          <button onClick={reset} style={{marginLeft:8}}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
