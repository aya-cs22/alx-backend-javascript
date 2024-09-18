const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
// const fs = require('fs');

// const countStudents = (path) => {
//   try {
//     const data = fs.readFileSync(path, 'utf-8');
//     //     data.split('\n')
//     // [
//     //     "firstname,lastname,age,field",
//     //     "Johann,Kerbrou,30,CS",
//     //     "Guillaume,Salou,30,SWE",
//     //     "Arielle,Salou,20,CS"
//     //   ]
//     const lines = data.split('\n').filter(line => line.trim() !== '');

//     if (lines.length <= 1) {
//       throw new Error('Cannot load the database');
//     }

//     // const headers = lines[0].split(',');
//     // ["firstname", "lastname", "age", "field"]
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
//   }
// };
// module.exports = countStudents;
