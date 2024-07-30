export default function getListStudentIds(id) {
  if (!Array.isArray(id)) {
    return [];
  }
  return id.map((_id) => _id.id);
}
