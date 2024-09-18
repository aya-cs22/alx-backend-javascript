const express = require('express');
const countStudents = require('./3-read_file_async');

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

app.listen(1245, () => {
  console.log('server runs on port 1245');
});

module.exports = app;
// const http = require('http');
// const countStudents = require('./2-read_file');

// const hostMan = 'localhost';
// const port = 1254;
// const app = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   if (req.url === '/') {
//     res.write('Hello Holberton School!');
//     res.end('');
//   }
//   if (req.url === '/students') {
//     res.write('This is the list of our students');
//     try{
//       const result = countStudents(process.argv[2]);
//       res.write(result);
//   } catch (error) {
//     res.write('Cannot load the database');
//   }
//   res.end();
// }
// });

// app.listen(port, hostMan, () => {

// });

// module.exports = app;
