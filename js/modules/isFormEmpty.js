export function isFormEmpty(...args) {
  if (args.length === 0) {
    console.error(
      "You didn't pass any parameter to the function! See trace below."
    );
    return console.trace('trace:');
  }

  for (const el of args) {
    if (el.tagName != 'INPUT') {
      console.error('You should pass input tags only! See trace below.');
      return console.trace('trace:');
    }
  }

  for (const el of args) {
    if (!el.value) return true;
  }

  return false;
}
