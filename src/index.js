/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const list = document.querySelector('.list');
const tasks = [
  {
    description: 'Create New Github Repo',
    completed: false,
    index: 0,
  },
  {
    description: 'Clone Repo',
    completed: false,
    index: 1,
  },
  {
    description: 'Initialize npm in the project folder',
    completed: false,
    index: 2,
  },
];

function generateTask(arg) {
  let task = '';
  tasks.forEach((element) => {
    task += `<li><input type="checkbox" class="check"><input type="text" class="input-list" value="${element.description}">
    <i class="fa fa-ellipsis-vertical"></i></li>`;
  });
  list.innerHTML = task;
}
generateTask(tasks);