/* eslint-disable no-unused-vars */
// remove to do
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/extensions
import './index.js';

export function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.index].deleted = true;
}