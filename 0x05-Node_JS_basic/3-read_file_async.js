const fs = require('fs').promises;
const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
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
  } catch (err) {
    console.error('Cannot load the database');
    throw err;
  }
};

module.exports = countStudents;
