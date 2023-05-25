import { getUsers } from '../localStorageFunctions.js';

export function displayData(currentUser = '', whereToDisplay = document.body) {
  if (!currentUser) {
    console.error('You must to pass currentUser ID. See trace.');
    return console.trace('trace:');
  }

  const users = getUsers();

  let userData = users
    .map((user) => {
      if (currentUser === user.login) {
        return user.userData;
      }
    })
    .find((item) => item);

  if (userData) whereToDisplay.innerHTML = userData;
}
