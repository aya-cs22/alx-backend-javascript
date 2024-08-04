export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
// export default function cleanSet(set, startString) {
//   const result = new Set();
//   if (typeof startString !== 'string' || startString === '') {
//     return '';
//   }

//   for (const value of set) {
//     if (typeof value === 'string' && value.startsWith(startString)) {
//       result.add(value.slice(startString.length));
//     } else if (typeof value !== 'string') {
//       // If a non-string type is found, return an empty string immediately
//       return '';
//     }
//   }
//   return Array.from(result).join('-');
// }
