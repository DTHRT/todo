import { isFormEmpty } from './modules/isFormEmpty.js';
import { resetInputs } from './modules/resetInputs.js';
import {
  deleteSession,
  getCurrentSession,
  isSessionActive,
} from './modules/session.js';
import { showErrorMessage } from './modules/showErrorMessage.js';
import { showWelcomeMessage } from './modules/showWelcomeMessage.js';
import { createTodoElement } from './modules/todo-modules/createTodoElement.js';
import { displayData } from './modules/todo-modules/displayData.js';
import { saveData } from './modules/todo-modules/saveData.js';
import { updateImage } from './modules/todo-modules/updateImage.js';

if (!isSessionActive()) window.open('auth.html', '_self');
showWelcomeMessage(document.querySelector('.navbar__right-block > p'));

(function () {
  const inputTitleEl = document.querySelector('.title');
  const inputDescriptionEl = document.querySelector('.description');
  const inputImageUrlEl = document.querySelector('.image');
  const inputAddTodo = document.querySelector('.addTodo');
  const inputSignOut = document.querySelector('.signOut');
  const errorMessageEl = document.querySelector('.error');
  const rowEl = document.querySelector('.row');

  displayData(getCurrentSession(), rowEl);

  inputAddTodo.addEventListener('click', (e) => {
    e.preventDefault();

    if (isFormEmpty(inputTitleEl)) {
      return showErrorMessage('title field must be filled!', errorMessageEl);
    }

    const todoElement = createTodoElement(
      inputTitleEl.value,
      inputDescriptionEl.value,
      inputImageUrlEl.value
    );

    rowEl.append(todoElement);
    resetInputs(inputTitleEl, inputDescriptionEl, inputImageUrlEl);
    saveData(getCurrentSession(), rowEl.innerHTML);
  });

  rowEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete_btn')) {
      e.target.parentElement.parentElement.remove();
      saveData(getCurrentSession(), rowEl.innerHTML);
    }

    if (e.target.classList.contains('edit_btn')) {
      const boxEl = e.target.parentElement.parentElement;
      let title = boxEl.querySelector('h4').innerHTML;
      const description = boxEl.querySelector('p').innerHTML;
      const imageUrl = boxEl.querySelector('img').getAttribute('src');

      const newTitle = prompt('Enter new title:', title);
      const newDescription = prompt('Enter new description:', description);
      const newImageUrl = prompt('Enter new image url:', imageUrl);

      if (typeof newTitle === 'string') {
        boxEl.querySelector('h4').innerHTML = newTitle;
      }

      if (typeof newDescription === 'string') {
        boxEl.querySelector('p').innerHTML = newDescription;
      }

      if (typeof newImageUrl === 'string') {
        boxEl.querySelector('img').setAttribute('src', newImageUrl);
      }

      updateImage(boxEl.querySelector('img'));
      saveData(getCurrentSession(), rowEl.innerHTML);
    }
  });

  inputSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    deleteSession();
    if (!isSessionActive()) window.open('auth.html', '_self');
  });
})();
