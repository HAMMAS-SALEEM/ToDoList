import {
  addItem,
} from '../src/CRUD.js';

describe('Test add and remove function', () => {
  describe('Add function tests', () => {
    test('should return the complete list of data', () => {
      const currentData = JSON.parse(localStorage.getItem('todos'));
      const newData = addItem(currentData, 'Task one');
      expect(newData).toEqual([{
        description: 'Task one',
        completed: false,
        index: 1,
      }]);
    });
    test('should set new data to localStorage', () => {
      const obj = {
        description: 'value',
        completed: false,
        index: 1,
      };
      localStorage.setItem('todos', JSON.stringify([obj]));
      const storage = localStorage.getItem('todos');
      expect(storage).toEqual(JSON.stringify([{
        description: 'value',
        completed: false,
        index: 1,
      }]));
    });
  });
});