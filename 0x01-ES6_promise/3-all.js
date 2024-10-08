/* eslint-disable no-unused-vars */
/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}



