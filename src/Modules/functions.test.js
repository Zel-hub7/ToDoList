// functions.test.js
import addTrash from './functions';

// Mock localStorage
const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();
global.localStorage = localStorageMock;

// Mock window.location.reload()
global.window = { location: { reload: jest.fn() } };

describe('addTrash', () => {
  it('should add a new button and make the description editable', () => {
    // Set up initial state
    const taskElement = document.createElement('li');
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'Task description';
    taskElement.appendChild(descriptionElement);

    const buttonElement = document.createElement('button');
    buttonElement.className = 'newButton';
    taskElement.appendChild(buttonElement);

    // Mock the event target
    const event = {
      target: {
        closest: () => buttonElement,
      },
    };

    // Call the addTrash function
    addTrash(event);

    // Check if the button was hidden
    expect(buttonElement.style.display).toBe('none');

    // Check if a new button was added to the parent element
    expect(taskElement.children.length).toBe(2);
    const newButton = taskElement.querySelector('.newButton');
    expect(newButton).toBeDefined();

    // Check if the description was made editable
    expect(descriptionElement.isContentEditable).toBe(true);
  });

  // Write more tests for other scenarios of addTrash function as needed
});
