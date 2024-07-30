export default function getListStudents(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
