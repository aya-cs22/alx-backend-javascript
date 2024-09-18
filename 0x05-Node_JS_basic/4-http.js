const http = require('http');

const hostMan = 'localhost';
const port = 1254;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostMan, () => {

});

module.exports = app;
