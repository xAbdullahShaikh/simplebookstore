const express = require('express');
const app = express();
const PORT = 3000;

// Sample /books route
app.get('/books', (req, res) => {
  res.json([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Brave New World", author: "Aldous Huxley" }
  ]);
});

// Sample /orders route
app.get('/orders', (req, res) => {
  res.json([
    { id: 101, bookId: 1, quantity: 2 },
    { id: 102, bookId: 2, quantity: 1 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
