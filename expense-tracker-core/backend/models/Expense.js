const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  notes: { type: String, default: '' }
});

module.exports = mongoose.model('Expense', expenseSchema);
