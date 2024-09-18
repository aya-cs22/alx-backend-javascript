// const http = require('http');
// const hostMan = 'localhost';
// const port = 1254;
// const app = http.createServer();
// app.on((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Holberton School!');
// });
// app.listen(port, hostMan, () => {
// });
// module.exports = app;
const http = require('http');

const port = 1254;
const host = -'127.0.0.1';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {

});

module.exports = app;