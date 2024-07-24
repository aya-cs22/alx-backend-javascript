export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('successful');
      }
      reject(new Error('error'));
    }, 1000);
  });
}
