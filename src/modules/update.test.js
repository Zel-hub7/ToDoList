// taskfunctions.test.js
import { updateIndexes } from './taskFunctions'; // Update the import path according to your file structure

describe('updateIndexes', () => {
  test('should update the index property of each task in the taskListArray', () => {
    // Arrange: Prepare the initial taskListArray with 3 tasks
    const taskListArray = [
      { index: 1, title: 'Task 1', completed: false },
      { index: 2, title: 'Task 2', completed: false },
      { index: 3, title: 'Task 3', completed: false },
    ];

    // Act: Call the updateIndexes function
    updateIndexes(taskListArray);

    // Assert: Check if the index property of each task is updated correctly
    expect(taskListArray[0].index).toBe(1);
    expect(taskListArray[1].index).toBe(2);
    expect(taskListArray[2].index).toBe(3);
  });

  test('should not modify the taskListArray when it is empty', () => {
    // Arrange: Prepare an empty taskListArray
    const taskListArray = [];

    // Act: Call the updateIndexes function
    updateIndexes(taskListArray);

    // Assert: Check that the taskListArray remains empty
    expect(taskListArray.length).toBe(0);
  });
});
