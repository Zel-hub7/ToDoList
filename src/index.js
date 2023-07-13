import "./style.css";

const tasks = [
  {
    description: 'Complete assignment',
    completed: false,
    index: 0,
  },
  {
    description: "Buy groceries",
    completed: true,
    index: 1,
  },
  {
    description: "Call a friend",
    completed: false,
    index: 2,
  },
];


const  populateTodoList =() => {
    const todoList = document.getElementById('todo-list');
    tasks.sort((a,b) => a.index - b.index);
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.textContent = task.description;
  
      if (task.completed) {
        listItem.classList.add('completed');
      }
  
      todoList.appendChild(listItem);
    });
  }
  document.addEventListener('DOMContentLoaded', populateTodoList);
