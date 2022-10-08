// load items to the user's interface
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { addToDo } from './addToDo.js';
import './index.js';

export const loadList = (array) => {
  array.forEach((item) => {
    addToDo(item.description, item.index, item.completed, item.deleted);
  });
};