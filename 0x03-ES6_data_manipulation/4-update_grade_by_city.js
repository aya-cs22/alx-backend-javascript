export default function updateStudentGradeByCity(students, city, newGrades) {
  if (newGrades === undefined) {
    return 'N/A';
  }
  if (Array.isArray(newGrades)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const gradUpdate = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: gradUpdate ? gradUpdate.grade : 'N/A',
        };
      });
  }
  return [];
}
