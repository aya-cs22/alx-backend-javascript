// const express = require('express');

// const port = 1245;
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello Holberton School!');
// });

// aapp.get('/students', async (req, res) => {
//     res.type('text/plain');
//     const studentsList = await getStudentsList(path.join(__dirname, 'database.csv'));
//     res.send(`This is the list of our students\n${studentsList}`);
//   });
// app.listen(port, () => {
// });

// module.exports = app;
#!/usr/bin/node
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((result) => {
      res.send(`This is the list of our students\n${result.join('\n')}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port);

module.exports = app;