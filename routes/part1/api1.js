const express = require('express');
const part1Router = express.Router();

part1Router.get('/test', (req, res, next)=>{
  res.send('test server');
});

module.exports = part1Router;