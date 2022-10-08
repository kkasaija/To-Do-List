/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import _ from 'lodash';
import './style.css';
import { loadList } from './loadList.js';
import { addToDo, completeToDo } from './addToDo.js';
import { removeToDo } from './removeToDo.js';

const clear = document.querySelector('.clear');
const list = document.getElementById('list');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

// Declare array and index
let LIST;
let index;

// get item from localstorage
const data = localStorage.getItem('TODO');

// check if data is not empty
if (data) {
  LIST = JSON.parse(data);
  index = LIST.length; // set the id to the last one in the list
  loadList(LIST); // load the list to the user interface
} else {
  // if data isn't empty
  LIST = [];
  index = 0;
}

// clear the local storage
clear.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});

// add an item to the list user the enter key
btn.addEventListener('click', (even) => {
  if (btn) {
    const description = input.value;

    // if the input isn't empty
    if (description) {
      addToDo(description, index, false, false);
      LIST.push({
        description,
        index,
        completed: false,
        deleted: false,
      });

      // add item to localstorage
      localStorage.setItem('TODO', JSON.stringify(LIST));
      index += index;
    }
    input.value = '';
  }
});

// for the items created dynamically
list.addEventListener('click', (event) => {
  const element = event.target; // return the clicked element inside list
  const elementJob = element.attributes.job.value; // complete or delete
  if (elementJob === 'complete') {
    completeToDo(element);
  } else if (elementJob === 'delete') {
    removeToDo(element);
  }

  // add item to localstorage
  localStorage.setItem('TODO', JSON.stringify(LIST));
});
