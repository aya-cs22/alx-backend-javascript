// Import signUpUser and uploadPhoto functions
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Define handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Return a new promise that resolves with an array of objects describing the outcome of each promise
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    // Map over the results array to transform each item into the desired format
    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}

