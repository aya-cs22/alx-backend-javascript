/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function handleResponseFromAPI(promise) {
  return pomise
    .then((response) => {
        resolve({status: 200, body: 'Success'});
    })
    .catch((error) => {
        reject(new Error(''));
    })
    .finally(() => {
        console.log('Got a response from the API');
    });
    }
