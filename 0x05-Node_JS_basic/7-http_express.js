const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const initialHeaderResponse = 'This is the list of our students\n';
  countStudents(process.argv[2])
    .then((data) => res.end(`${initialHeaderResponse}${data.join('\n')}`))
    .catch((err) => res.end(`${initialHeaderResponse}${err.message}`));
});

app.listen(PORT);

module.exports = app;
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
