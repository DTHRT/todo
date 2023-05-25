import { createUserObject } from './modules/createUserObject.js';
import { isFormEmpty } from './modules/isFormEmpty.js';
import {
  isUserExist,
  getUsers,
  addUser,
} from './modules/localStorageFunctions.js';
import { isSessionActive } from './modules/session.js';
import { showErrorMessage } from './modules/showErrorMessage.js';

if (isSessionActive()) window.open('index.html', '_self');

(function () {
  const inputLoginEl = document.querySelector('.email');
  const inputPasswordEl = document.querySelector('.password');
  const inputSubmitEl = document.querySelector('.submitBtn');
  const errorMessageEl = document.querySelector('.error');

  inputSubmitEl.addEventListener('click', (e) => {
    e.preventDefault();

    if (isFormEmpty(inputLoginEl, inputPasswordEl)) {
      return showErrorMessage('all fields must be filled!', errorMessageEl);
    }

    const user = createUserObject(inputLoginEl.value, inputPasswordEl.value);

    if (isUserExist(user.login, getUsers())) {
      return showErrorMessage(
        'user with this email already exists!',
        errorMessageEl
      );
    }

    addUser(user);
    window.open('auth.html', '_self');
  });
})();
