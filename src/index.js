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
      updateClearButtonVisibility();
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
      deleteTask(task);
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
      updateClearButtonVisibility();
      newTaskInput.value = '';
    }
  }
}

function deleteTask(task) {
  const taskIndex = tasks.indexOf(task);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    populateTodoList();
    updateClearButtonVisibility();
  }
}

function clearCompletedTasks() {
  tasks.forEach(task => {
    if (task.completed) {
      deleteTask(task);
    }
  });
}

function updateClearButtonVisibility() {
  const clearCompletedDiv = document.getElementById('clear-completed');
  const completedTasks = tasks.filter(task => task.completed);

  if (completedTasks.length > 0) {
    clearCompletedDiv.style.display = 'block';
  } else {
    clearCompletedDiv.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const newTaskInput = document.getElementById('new-task');
  newTaskInput.addEventListener('keydown', addTask);

  const clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', clearCompletedTasks);

  populateTodoList();
  updateClearButtonVisibility();
});
