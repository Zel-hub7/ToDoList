// taskfunctions.test.js
import {
  addTask,
  removeTasks,
  taskListArray,
} from './taskFunctions.js';

// Set up jsdom
import 'jsdom-global/register'; // Update the import path according to your file structure

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

  describe('addTask', () => {
    test('should add a new task to the taskListArray and save to localStorage', () => {
      // Initial taskListArray should be empty
      expect(taskListArray.length).toBe(0);

      // Add a new task
      addTask('Task 1');

      // After adding, taskListArray should contain one task
      expect(taskListArray.length).toBe(1);

      // Check if the task is added correctly
      expect(taskListArray[0]).toEqual({
        index: 1,
        title: 'Task 1',
        completed: false,
      });

      // Check if the task is saved to localStorage
      expect(localStorage.getItem('taskItems')).toBe(
        JSON.stringify(taskListArray),
      );
    });

    test('should not add a task with an empty title', () => {
      // Initial taskListArray should be empty
      expect(taskListArray.length).toBe(0);

      // Try to add a task with an empty title
      addTask('');

      // After adding, taskListArray should still be empty
      expect(taskListArray.length).toBe(0);

      // localStorage should not be updated with an empty task
      expect(localStorage.getItem('taskItems')).toBeUndefined();
    });
  });

  describe('removeTasks', () => {
    test('should remove a task from the taskListArray and save to localStorage', () => {
      // Add some tasks for testing
      taskListArray.push(
        { index: 1, title: 'Task 1', completed: false },
        { index: 2, title: 'Task 2', completed: false },
        { index: 3, title: 'Task 3', completed: false },
      );

      // Remove the second task (index 1)
      removeTasks(1);

      // After removing, taskListArray should contain two tasks
      expect(taskListArray.length).toBe(2);

      // Check if the task at index 1 is removed correctly
      expect(taskListArray[0].title).toBe('Task 1');
      expect(taskListArray[1].title).toBe('Task 3');

      // Check if the taskListArray is saved to localStorage
      expect(localStorage.getItem('taskItems')).toBe(
        JSON.stringify(taskListArray),
      );
    });
  });

  // Add more tests for the other functions if needed
});
