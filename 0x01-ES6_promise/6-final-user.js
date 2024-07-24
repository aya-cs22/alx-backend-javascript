import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // التأكد من وجود جميع الوسائط
  if (!firstName || !lastName || !fileName) {
    return Promise.reject(new Error('All arguments are required'));
  }

  // استخدام Promise.allSettled بدلاً من Promise.all
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
  .then((results) => {
    // معالجة النتائج وتنسيقها بالشكل المطلوب
    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    }));
  });
}
