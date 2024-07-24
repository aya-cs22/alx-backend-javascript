import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName && fileName) {
        Promise.allSettled([
        signUpUser(firstName, lastName),
        uploadPhoto(fileName),
      ]);
    }
  }).then((response) => {
    return response.map(response({
      status: response.status,
      value: response.status === 'fulfilled' ? response.value : response.reason,
    }));
  });
}
