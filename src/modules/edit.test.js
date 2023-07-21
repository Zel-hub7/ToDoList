// taskfunctions.test.js
import {
  taskListArray,
  editTaskDescription,
} from './taskFunctions.js';

// Set up jsdom
import 'jsdom-global/register.js';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();

// Mock the global window object
global.window = {};
global.localStorage = localStorageMock;

// Mock DOM
document.body.innerHTML = `
    <ul id="taskList">
      <!-- Any existing list items can be added here -->
    </ul>
  `;

describe('Task Management Functions', () => {
  beforeEach(() => {
    // Clear taskListArray and localStorage before each test
    taskListArray.length = 0;
    localStorage.clear();
  });

  describe('editTaskDescription', () => {
    test('should edit the task description and update localStorage', () => {
      // Add some tasks for testing
      taskListArray.push(
        { index: 1, title: 'Task 1', completed: false },
        { index: 2, title: 'Task 2', completed: false },
        { index: 3, title: 'Task 3', completed: false },
      );

      // Edit the description of the task at index 1
      editTaskDescription(0, 'Updated Task 1');

      // After editing, taskListArray should be updated
      expect(taskListArray[0].title).toBe('Updated Task 1');

      // Check if the taskListArray is saved to localStorage
      expect(localStorage.getItem('taskItems')).toBe(
        JSON.stringify(taskListArray),
      );
    });
  });

  // Add more tests for other DOM manipulation functions if needed
});
