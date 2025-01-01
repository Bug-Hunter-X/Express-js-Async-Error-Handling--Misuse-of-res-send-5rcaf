const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Incorrectly using res.send outside of a callback function
  res.send('Hello');
  console.log('Request received!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});