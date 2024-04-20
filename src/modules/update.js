const taskLs = JSON.parse(localStorage.getItem("mylist"));
const checkbx = document.querySelectorAll(".checkBox");
const clearCompleted = document.querySelector(".clearAll");
const content = document.querySelector(".list-content");

const updateLocalStorage = () => {
  localStorage.setItem("mylist", JSON.stringify(taskLs));
  const another = JSON.parse(localStorage.getItem("mylist"));
  return another;
};

const statechange = () => {
  content.addEventListener("click", (e) => {
    if (e.target.classList.contains("checkBox")) {
      const h = e.target.parentElement.classList.value;
      const state = e.target;
      if (state.checked) {
        state.parentElement.parentElement.classList.add("complete");
        taskLs.forEach((element, index) => {
          if (element.index == h) {
            element.completed = true;
          }
          updateLocalStorage();
        });
      } else {
        console.log("not checked");
        updateLocalStorage();
      }
    } else {
      console.log("not checkbox");
    }
  });
};

const deleteCompleted = () => {
  clearCompleted.addEventListener("click", (e) => {
    const filt = JSON.parse(localStorage.getItem("mylist"));

    const filtered = filt.filter((x) => x.completed === false);
    console.log(filtered);
    updateLocalStorage();
    localStorage.setItem("mylist", JSON.stringify(filtered));
    location.reload();
  });
};

export { statechange, clearCompleted, deleteCompleted, checkbx };
