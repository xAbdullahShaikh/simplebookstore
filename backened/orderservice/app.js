const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/order', (req, res) => {
  const order = req.body;
  res.json({ message: 'Order placed successfully', order });
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
