const express = require('express');

const port = 1245;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

aapp.get('/students', async (req, res) => {
    res.type('text/plain');
    const studentsList = await getStudentsList(path.join(__dirname, 'database.csv'));
    res.send(`This is the list of our students\n${studentsList}`);
  });
app.listen(port, () => {
});

module.exports = app;
