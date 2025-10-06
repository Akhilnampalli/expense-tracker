const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { amount, category, date, notes } = req.body;
    const expense = new Expense({ amount, category, date, notes });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.from || req.query.to) {
      filter.date = {};
      if (req.query.from) filter.date.$gte = new Date(req.query.from);
      if (req.query.to) filter.date.$lte = new Date(req.query.to);
    }
    const expenses = await Expense.find(filter).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSummary = async (req, res) => {
  try {
    const summary = await Expense.aggregate([
      { $group: { _id: '$category', total: { $sum: '$amount' } } }
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
