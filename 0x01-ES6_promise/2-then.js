/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function handleResponseFromAPI(promise) {
    return new Promise((resolve, reject) => {
      promise
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new Error(''));
        })
        .finally(() => {
          console.log('Got a response from the API');
        });
    });
  }
  lnjf