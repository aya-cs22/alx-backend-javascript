const express = require('express');

const port = 1245;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(data);
    }).catch((error) => {
      res.send(error.message);
    });
});
app.listen(port, () => {
});

module.exports = app;
