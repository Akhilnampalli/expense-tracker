const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, getSummary } = require('../controllers/expenseController');

// POST /api/expenses -> add expense
router.post('/', addExpense);

// GET /api/expenses -> list/filter
router.get('/', getExpenses);

// GET /api/expenses/summary -> category-wise totals
router.get('/summary', getSummary);

module.exports = router;
