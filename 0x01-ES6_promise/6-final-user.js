// Import the necessary modules
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define and export the handleProfileSignup function
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to wait for both promises to settle
  const responses = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  // Map over the responses to transform them into the desired structure
  const transformedResponses = responses.map(response => ({
    status: response.status,
    value: response.status === 'fulfilled' ? response.value : response.reason,
  }));

  // Return the transformed responses
  return transformedResponses;
}

// import signUpUser from './4-user-promise';
// import uploadPhoto from './5-photo-reject';

// export default async function handleProfileSignup(firstName, lastName, fileName) {
//   return Promise.allSettled([
//     signUpUser(firstName, lastName),
//     uploadPhoto(fileName),
//   ]).then((response) => {
//     return response.map(response({
//       status: response.status,
//       value: response.status === 'fulfilled' ? response.value : response.reason,
//     }));
//   });
// }