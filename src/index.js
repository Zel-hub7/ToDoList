import "./style.css";

const tasks = [];

function populateTodoList() {
  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item'; // Add class for positioning

    if (task.completed) {
      listItem.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        listItem.classList.add('completed');
        task.completed = true;
      } else {
        listItem.classList.remove('completed');
        task.completed = false;
      }
    });

    const menuBar = document.createElement('i');
    menuBar.className = 'fas fa-ellipsis-v menu-bar';
    menuBar.addEventListener('click', () => {
      menuBar.style.display = 'none';
      deleteIcon.style.display = 'inline-block';
    });

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash delete-icon';
    deleteIcon.addEventListener('click', () => {
      removeTask(task);
    });

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(menuBar);
    listItem.appendChild(deleteIcon);
    listItem.appendChild(taskDescription);
    todoList.appendChild(listItem);
  });
}

function addTask(event) {
  if (event.key === 'Enter') {
    const newTaskInput = document.getElementById('new-task');
    const newTaskDescription = newTaskInput.value.trim();

    if (newTaskDescription !== '') {
      const newTask = {
        description: newTaskDescription,
        completed: false,
        index: tasks.length,
      };

      tasks.push(newTask);
      populateTodoList();
      newTaskInput.value = '';
    }
  }
}

function removeTask(task) {
  const taskIndex = tasks.indexOf(task);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    populateTodoList();
  }
}

// Event listener for the "Enter" key
const newTaskInput = document.getElementById('new-task');
newTaskInput.addEventListener('keydown', addTask);

// Call the function to populate the initial To-Do list
populateTodoList();
