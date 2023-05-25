export function showErrorMessage(
  messageStr = '',
  whereToShowEl = document.body,
  durationInMs = 3000
) {
  if (whereToShowEl === document.body) {
    return console.error(`You didn't pass 2nd argument in showErrorMessage().`);
  }

  whereToShowEl.innerHTML = `Error: ${messageStr}`;
  setTimeout(() => {
    whereToShowEl.innerHTML = '';
  }, durationInMs);
}
