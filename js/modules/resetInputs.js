export function resetInputs(...args) {
  for (const el of args) {
    el.value = '';
  }
}
