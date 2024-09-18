const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    //     data.split('\n')
    // [
    //     "firstname,lastname,age,field",
    //     "Johann,Kerbrou,30,CS",
    //     "Guillaume,Salou,30,SWE",
    //     "Arielle,Salou,20,CS"
    //   ]
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // const headers = lines[0].split(',');
    // ["firstname", "lastname", "age", "field"]
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
  }
};

module.exports = countStudents;
