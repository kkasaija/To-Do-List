// remove to do
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */

import './index.js';

export const removeToDo = (element) => {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.index].deleted = true;
};