const express = require('express');

port = 1245;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, ()=>{
});

module.exports = app;