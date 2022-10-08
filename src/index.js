/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
import './style.css';

import {
  statechange, deleteCompleted, checkbx, clearCompleted,
} from './modules/update.js';

class List {
  constructor(description, index, completed) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }
}

// Create local storage

if (localStorage.getItem('mylist') === null) {
  localStorage.setItem('mylist', JSON.stringify([]));
}
const taskLs = JSON.parse(localStorage.getItem('mylist'));

// updateLocalStorage
const updateLocalStorage = () => {
  localStorage.setItem('mylist', JSON.stringify(taskLs));
  const another = JSON.parse(localStorage.getItem('mylist'));
  return another;
};

// display todoList
const displayItem = (items) => {
  let todoos = '';

  for (let i = 0; i < items.length; i += 1) {
    todoos += `
  <div class="todoItem">
  <div class="${items[i].index}">
    <input type="checkbox" class="checkBox"  />
    <p class="todoActivity" id=${items[i].completed}> ${items[i].description}  </p>
  </div>
  <div class="${items[i].index}">
  <button class="addbtn">

  <span class="edit" id='${items[i].index}'><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
  </span>
  <span class="delete" id='${items[i].index}'>&cross;</span>
  </button>
  </div>
  <button class="deleteItem">  </button>  
  </div>   `;
  }
  return todoos;
};

const monitor = () => {
  if (checkbx) {
    console.log('');
    statechange();
  } else {
    checkbx.addEventListener('change', () => {
      console.log(' ');
    });
  }
};

monitor();
deleteCompleted();
clearCompleted;

// clear fields

const clearFields = () => {
  document.querySelector('.taskInput').value = '';
};

// showlist
const showList = () => {
  const listContent = document.querySelector('.list-content');
  listContent.innerHTML = `

 ${displayItem(taskLs)}`;

  clearFields();
};

// Create new task

const addItem = (description) => {
  const anothertask = new List(description, taskLs.length + 1, false);
  taskLs.push(anothertask);
  updateLocalStorage();
  showList();
};

// to edit

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.querySelector('.taskInput').value;
  const taskInput = document.querySelector('.taskInput');

  addItem(task);
  location.reload();
  taskInput.focus();
});

const deleted = (pop) => {
  const removeLss = JSON.parse(localStorage.getItem('mylist'));
  removeLss.forEach((element, index) => {
    if (element.index == pop) {
      removeLss.splice(index, 1);
      localStorage.setItem('mylist', JSON.stringify(removeLss));
    }
  });
  localStorage.setItem('mylist', JSON.stringify(removeLss));
  location.reload();
};

// delete function

const deleteItem = (ele) => {
  if (ele.classList.contains('delete')) {
    ele.parentElement.parentElement.parentElement.remove();

    const pop = ele.parentElement.parentElement.classList.value;

    deleted(pop);
  }
};

// delete item
const toDelete = document.querySelector('.list-content');
if (!toDelete) {
  console.log(' ');
} else {
  document.querySelector('.list-content').addEventListener('click', (e) => {
    if (!e) {
      console.log(' ');
    } else {
      deleteItem(e.target);
    }
  });
}

// edit item

const toEdit = document.querySelector('.list-content');
const editForm = document.querySelector('.edit-form');
const form2 = document.querySelector('.form');
const editItem = (tar) => {
  if (tar.parentElement.classList.contains('edit')) {
    form2.style.display = 'none';
    editForm.style.display = 'block';
    const editInput = document.querySelector('.editInput');
    editInput.focus();
    const itemId = tar.parentElement.parentElement.parentElement.classList.value;
    const num = parseInt(itemId);
    const p = num - 1;

    if (taskLs[p].index === num) {
      editInput.value = taskLs[p].description;
      editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        taskLs[p].description = editInput.value;
        taskLs[p].completed = false;
        taskLs[p].index = num;

        updateLocalStorage();

        location.reload();
      });
    }
  }
};

// edit function

if (!toEdit) {
  console.log(' ');
} else {
  toEdit.addEventListener('click', (e) => {
    editItem(e.target);
  });
}

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  location.reload();
});

const init = () => {
  taskLs.forEach((element, index) => {
    if (element) {
      element.index = index + 1;
    }
  });

  updateLocalStorage();

  window.onload = () => {
    showList();
  };
  console.log(' ');
};
init();
