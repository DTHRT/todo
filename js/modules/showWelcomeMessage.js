export function showWelcomeMessage(whereToShowEl = document.body) {
  if (whereToShowEl === document.body) {
    return console.error(`You didn't pass argument in showWelcomeMessage().`);
  }

  whereToShowEl.innerHTML = `Hello, ${localStorage.getItem('session')}`;
}
