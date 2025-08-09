const express = require('express');
const app = express();
const port = 3000;

// A simple route for the homepage
app.get('/', (req, res) => {
  console.log('Homepage route was requested!'); // We added this to see it in the terminal
  res.send('Test response from the server.');
});

app.listen(port, () => {
  console.log(`Test server is running on http://localhost:${port}`);
});
