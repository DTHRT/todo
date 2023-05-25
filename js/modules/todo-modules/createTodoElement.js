import { createElement } from '../createElement.js';

export function createTodoElement(
  titleStr = '',
  descriptionStr = '',
  imageUrlStr = ''
) {
  const template = `
   <div class="boxes">
    <h4>${titleStr}</h4>
    <img src="${imageUrlStr}" 
         alt="${titleStr}" 
         class="${imageUrlStr ? '' : 'd-none'}
     "/>
    <p>${descriptionStr}</p>
    <div class="btn_inline">
     <button class="delete_btn">Delete</button>
     <button class="edit_btn">Edit</button>
    </div>
   </div>
  `;

  return createElement(template);
}
