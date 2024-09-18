const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

const requestListener = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const { url } = req;
  if (url === '/') res.end('Hello Holberton School!');
  if (url === '/students') {
    const initialHeaderResponse = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then((data) => res.end(`${initialHeaderResponse}${data.join('\n')}`))
      .catch((err) => res.end(`${initialHeaderResponse}${err.message}`));
  }
};

const app = http.createServer(requestListener);

app.listen(PORT);

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
