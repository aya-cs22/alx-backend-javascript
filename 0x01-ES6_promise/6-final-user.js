import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((response) => response.map(({ status, value }) => ({
    status,
    value: status === 'fulfilled' ? value : undefined,
  }))); // Ensure this line ends with a parenthesis before the closing brace
}
