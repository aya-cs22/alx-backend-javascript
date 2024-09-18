const fs = require('fs'); // Make sure to require the fs module

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length <= 1) {
        return reject(new Error('Cannot load the database'));
      }
      const students = lines.slice(1);
      console.log(`Number of students: ${students.length}`);
      const fieldCounts = {};
      students.forEach((student) => {
        const studentData = student.split(',');
        const field = studentData[3];
        const firstName = studentData[0];
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstName);
      });
      for (const [field, names] of Object.entries(fieldCounts)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    //   resolve();
    });
  });
};
module.exports = countStudents;
