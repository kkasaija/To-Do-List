/* eslint-disable no-unreachable */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const taskLs = JSON.parse(localStorage.getItem('mylist'));
const updateLocalStorage = () => {
  localStorage.setItem('mylist', JSON.stringify(taskLs));
  const another = JSON.parse(localStorage.getItem('mylist'));
  return another;
};

export const statechange = () => {
  const content = document.querySelector('.list-content');
  content.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkBox')) {
      const h = e.target.parentElement.classList.value;

      console.log(h);
      const state = e.target;
      if (state.checked) {
        console.log('checked');
        state.parentElement.parentElement.classList.add('complete');

        taskLs.forEach((element, index) => {
          if (element.index == h) {
            element.completed = true;
          }

          updateLocalStorage();
        });
      } else {
        console.log('not checked');
        updateLocalStorage();
      }
    } else {
      console.log('not checkbox');
    }
  });
};
export const checkbx = document.querySelectorAll('.checkBox');

export const clearCompleted = document.querySelector('.clearAll');
export const deleteCompleted = () => {
  clearCompleted.addEventListener('click', (e) => {
    const filt = JSON.parse(localStorage.getItem('mylist'));

    const filtered = filt.filter(((x) => x.completed === false));
    console.log(filtered);
    updateLocalStorage();
    localStorage.setItem('mylist', JSON.stringify(filtered));
    location.reload();
  });
};