import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastname, filename) {
  return Promise.allSettled([signUpUser(firstName, lastname),
    uploadPhoto(filename),
  ])
    .catch((results) => (
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : String(result.reason),
      }))
    ));
}
