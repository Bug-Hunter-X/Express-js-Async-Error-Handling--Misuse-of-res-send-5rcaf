const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Correctly using res.send inside a callback function
  console.log('Request received!');
  res.send('Hello');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});