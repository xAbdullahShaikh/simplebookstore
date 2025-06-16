const express = require('express');
const app = express();
const PORT = 3000;

app.get('/books', (req, res) => {
  res.json([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Brave New World", author: "Aldous Huxley" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Book Service running on port ${PORT}`);
});
