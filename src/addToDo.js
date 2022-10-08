// add to do function
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import './index.js';

export const addToDo = (description, index, completed, deleted) => {
  if (deleted) { return; }
  const item = `<li class="item">
    <p class="text">${description}</p>
    <i class="fa-solid fa-trash de" job="delete" id="${index}"></i>
  </li>`;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, item);
};