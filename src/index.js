import "./style.css";

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveToLocalStorage(data) {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
const input = document.getElementById("new-task");

tasks.sort((a, b) => a.index - b.index);

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const inputValue = input.value;
    const newObj = {
      description: inputValue,
      completed: false,
      index: tasks.length + 1,
    };
    saveToLocalStorage(newObj);
    window.location.reload();
    input.value = "";
  }
});
console.log(tasks)
function populateTodoList() {
  const todoList = document.getElementById("todo-list");

  for (let i = 0; i < tasks.length; i += 1) {
    const { index, description, completed } = tasks[i];
    todoList.innerHTML += `
        
       
        <li id="L${index}" class ="common">
        <div class = "list_container">
        <div class = "list2">
        <input for ="P${index}" id="${index}" type="checkbox" ${
      completed && "checked"
    }  class ="checkbox">
        <p id ="P${index}" class="li-p">${description}</p>
        </div>
        <button id="edit-remove${index}"  class="btn dots list-item">
         <i class="fa fa-ellipsis-v"></i>
        </button>
        </li>
        </div>
      `;
  }
}

// Call the function to populate the list on page load
populateTodoList();
