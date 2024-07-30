export default function getListStudents(students, city) {
  return students.filter((student) => student.location === city);
}
