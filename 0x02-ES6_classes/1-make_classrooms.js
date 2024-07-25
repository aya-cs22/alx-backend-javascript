import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const newObj = new ClassRoom(19);
  const newObj2 = new ClassRoom(20);
  const newObj3 = new ClassRoom(34);
  arr.push(newObj, newObj2, newObj3);
  return (arr);
}
