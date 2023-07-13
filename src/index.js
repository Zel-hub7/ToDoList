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
  tasks.sort((a,b) => a.index - b.index);
  function populateTodoList() {
    const todoList = document.getElementById('todo-list');
  
    for(let i = 0; i <tasks.length; i++) {
        const { index, description, completed } = tasks[i];
        todoList.innerHTML += `
        
       
        <li id="L${index}" class ="common">
        <div class = "list_container">
        <div class = "list2">
        <input for ="P${index}" id="${index}" type="checkbox" ${
      completed && 'checked'
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
  
  