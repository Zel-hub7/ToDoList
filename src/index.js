import "./style.css";

const tasks = [];

function populateTodoList() {
  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = task.description;
    listItem.className = 'todo-item'; // Add class for positioning

    if (task.completed) {
      listItem.classList.add('completed');
    }

    const menuIcon = document.createElement('span');
    menuIcon.className = 'menu-icon';
    menuIcon.innerHTML = '&#8942;';
    menuIcon.addEventListener('click', () => {
      if (menuIcon.classList.contains('delete-icon')) {
        removeTask(task);
      } else {
        menuIcon.classList.add('delete-icon');
      }
    });

    listItem.appendChild(menuIcon);
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
