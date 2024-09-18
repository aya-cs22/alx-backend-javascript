const fs = require('fs').promises;

async function readDatabase(filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      const lines = data.split('\n');
      const studentData = {};
      lines.forEach(line => {
        const [firstname, , , field] = line.split(',');
        if (firstname && field) {
          if (!studentData[field]) {
            studentData[field] = [];
          }
          studentData[field].push(firstname);
        }
      });
      resolve(studentData);
    } catch (error) {
      reject(new Error(`Cannot load the database: ${error.message}`));
    }
  });
}

module.exports = readDatabase;
