export default function cleanSet(set, startString) {
  const result = new Set();
  if (startString === '' && typeof startString !== 'string') {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.add(value.slice(startString.length));
    }
  }
  return Array.from(result).join('-');
}
