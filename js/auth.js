import { isFormEmpty } from './modules/isFormEmpty.js';
import { getUsers } from './modules/localStorageFunctions.js';
import { createSession, isSessionActive } from './modules/session.js';
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

    const users = getUsers();

    for (const el of users) {
      if (
        inputLoginEl.value === el.login &&
        inputPasswordEl.value === el.password
      ) {
        createSession(el.login);
        return window.open('index.html', '_self');
      }
    }

    return showErrorMessage(
      'Email or password is incorrect. Try again.',
      errorMessageEl
    );
  });
})();
