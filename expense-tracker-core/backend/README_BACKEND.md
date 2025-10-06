Backend setup
-------------
1. cd backend
2. npm install
3. copy .env.example to .env and set MONGO_URI
4. npm run dev
API endpoints:
- POST /api/expenses
  body: { amount, category, date (ISO string optional), notes }
- GET /api/expenses
  query params: category, from (YYYY-MM-DD), to (YYYY-MM-DD)
- GET /api/expenses/summary
