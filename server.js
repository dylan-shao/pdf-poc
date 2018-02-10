const express = require('express');
const part1Router = require('./routes/part1/api1');
const part2Router = require('./routes/part2/api2');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ 
  extended: true
})); 

app.use('/part1', part1Router);
app.use('/part2', part2Router);

app.get('/test', (req, res) => {
  res.send('hello pdf');
});

app.listen(port);