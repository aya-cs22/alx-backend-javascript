import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((responses) => responses.map(responseItem => ({
    status: responseItem.status,
    value: responseItem.status === 'fulfilled' ? responseItem.value : responseItem.reason,
  })));
}
