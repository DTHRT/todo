export function updateImage(imageEl = document.body) {
  if (imageEl.tagName != 'IMG') {
    console.error('You must to pass img tag. See trace.');
    return console.trace('trace:');
  }

  if (imageEl.getAttribute('src')) {
    imageEl.classList.remove('d-none');
  } else {
    imageEl.classList.add('d-none');
  }
}
