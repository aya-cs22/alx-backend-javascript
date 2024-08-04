// 8-clean_set.js
export default function cleanSet(set, startString) {
  const result = new Set();
  
  // Early return if startString is not valid
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  for (const value of set) {
    if (typeof value === 'string') {
      if (value.startsWith(startString)) {
        result.add(value.slice(startString.length));
      }
    } else {
      // Return empty string if a non-string type is found
      return '';
    }
  }

  return Array.from(result).join('-');
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
