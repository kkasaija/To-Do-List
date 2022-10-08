/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import './index.js';

const CHECK = 'fa-solid fa-square-check';
const UNCHECK = 'fa-regular fa-stop';
const LINE_THROUGH = 'lineThrough';

export const addToDo = (description, index, completed, deleted) => {
  if (deleted) { return; }
  const DONE = completed ? CHECK : UNCHECK;
  const LINE = completed ? LINE_THROUGH : '';
  const item = `<li class="item">
    <i class=" ${DONE} co" job="complete" id="${index}"></i>
    <p class="text ${LINE}">${description}</p>
    <i class="fa fa-trash-o de" job="delete" id="${index}"></i>
  </li>`;
  const position = 'beforeend';
  list.insertAdjacentHTML(position, item);
};

export const completeToDo = (element) => {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
  LIST[element.index].completed = !LIST[element.index].completed;
};
