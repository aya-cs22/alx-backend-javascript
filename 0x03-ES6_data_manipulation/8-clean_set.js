export default function cleanSet(set, startString) {
  // Early return if startString is not a string or is empty
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = new Set();

  // Single loop to filter and transform strings, and validate types
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.add(value.slice(startString.length));
    } else if (typeof value !== 'string') {
      // If a non-string type is found, return an empty string immediately
      return '';
    }
  }

  // Join the processed strings with hyphens
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
