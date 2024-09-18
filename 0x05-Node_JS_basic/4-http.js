const http = require('http');
const hostMan = '127.0.0.1';
const port = 1254;
const app = http.createServer();
app.on((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
server.listen(port, hostMan, () => {
});
module.exports = app;