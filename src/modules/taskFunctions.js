// taskfunctions.js
let taskListArray = [];

// Check if localStorage is available (only in browser environment)
if (typeof localStorage !== 'undefined') {
  taskListArray = JSON.parse(localStorage.getItem('taskItems')) || [];
}

const saveTasktoLocal = () => {
  // Check if localStorage is available (only in browser environment)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('taskItems', JSON.stringify(taskListArray));
  }
};

const updateIndexes = () => {
  taskListArray.forEach((task, index) => {
    task.index = index + 1;
  });
};

const removeTasks = (index) => {
  taskListArray.splice(index, 1);
  updateIndexes();
  saveTasktoLocal();
};

const editTaskDescription = (index, newTitle) => {
  taskListArray[index].title = newTitle;
  saveTasktoLocal();
};

const addTask = (title) => {
  if (title.trim() !== '') {
    const task = {
      index: taskListArray.length + 1,
      title,
      completed: false,
    };
    taskListArray.push(task);
    saveTasktoLocal();
  }
};

export {
  taskListArray,
  saveTasktoLocal,
  removeTasks,
  editTaskDescription,
  addTask,
  updateIndexes,
};
