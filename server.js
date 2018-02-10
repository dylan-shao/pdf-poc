const express = require('express');
const part1Router = require('./routes/part1/api1');
const app = express();

const port = process.env.PORT || 5000;

app.use('/part1', part1Router);

app.get('/test', (req, res) => {
  res.send('hello pdf');
});

app.listen(port);