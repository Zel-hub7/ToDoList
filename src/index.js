import './style.css';
const tasks = [
    {
      description: "Task 1",
      completed: false,
      index: 0,
    },
    {
      description: "Task 2",
      completed: true,
      index: 1,
    },
    {
      description: "Task 3",
      completed: false,
      index: 2,
    },
  ];
  function populateTodoList() {
    const todoList = document.getElementById('todo-list');
  
    tasks.forEach(task => {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      listItem.appendChild(checkbox);
      listItem.innerHTML += task.description;
      todoList.appendChild(listItem);
    });
  }
  
  
  // Call the function to populate the list on page load
  populateTodoList();
  
  