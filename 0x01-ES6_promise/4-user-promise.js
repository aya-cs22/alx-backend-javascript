function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      resolve({ firstName, lastName });
    } else {
      reject(new Error('Both firstName and lastName are required'));
    }
  });
}
export default signUpUser;
