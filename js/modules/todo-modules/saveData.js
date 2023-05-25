import { getUsers, updateUserData } from '../localStorageFunctions.js';

export function saveData(currentUser = '', html = '') {
  if (!currentUser) {
    console.error('You must to pass currentUser argument. See trace.');
    return console.trace('trace:');
  }

  const allUsers = getUsers();

  for (const user of allUsers) {
    if (user.login === currentUser) {
      user.userData = html;
      return updateUserData(user);
    }
  }
  return alert('Current session not found in localstorage.');
}
