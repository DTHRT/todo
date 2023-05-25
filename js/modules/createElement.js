export function createElement(htmlStr = '') {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = htmlStr;
  return wrapper.firstElementChild;
}
