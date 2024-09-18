// const fs = require('fs').promises;
// const countStudents = async (path) => {
//   try {
//     const data = await fs.readFile(path, 'utf-8');
//     const lines = data.split('\n').filter(line => line.trim() !== '');
//     if (lines.length <= 1) {
//       throw new Error('Cannot load the database');
//     }
//     const students = lines.slice(1);
//     console.log(`Number of students: ${students.length}`);
//     const fieldCounts = {};
//     students.forEach((student) => {
//       const studentData = student.split(',');
//       const field = studentData[3];
//       const firstName = studentData[0];
//       if (!fieldCounts[field]) {
//         fieldCounts[field] = [];
//       }
//       fieldCounts[field].push(firstName);
//     });
//     for (const [field, names] of Object.entries(fieldCounts)) {
//       console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
//     }
//   } catch (err) {
//     console.error('Cannot load the database');
//     throw err;
//   }
// };

// module.exports = countStudents;
const http = require('http');
const countStudents = require('./2-read_file');

const port = 1245;
const host = '127.0.0.1';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end('');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const result = countStudents(process.argv[2]);
      res.write(result);
    } catch (error) {
      res.write('Cannot load the database');
    }

    res.end();
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
