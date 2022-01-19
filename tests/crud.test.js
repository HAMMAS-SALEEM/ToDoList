import {
  addItem, removeItem
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
  describe('Remove Function Test',()=>{
    test('should return the id of removed element',()=>{
      let currentData = JSON.parse(localStorage.getItem('todos'));
      addItem(currentData, 'Task one');
       currentData = JSON.parse(localStorage.getItem('todos'));
      addItem(currentData, 'Task two');
       currentData = JSON.parse(localStorage.getItem('todos'));
      addItem(currentData, 'Task three');
       currentData = JSON.parse(localStorage.getItem('todos'));
      addItem(currentData, 'Task four');
      const removeData = removeItem(1);
      expect(removeData).toBe(1);
    })
    test('should check if element is removed from array',()=>{
      removeItem(1);
      const curData = localStorage.getItem('todos');
      expect(curData).toEqual(JSON.stringify([{
        description: 'Task two',
        completed: false,
        index: 1,
      },{
        description: 'Task three',
        completed: false,
        index: 2,
      },{
        description: 'Task four',
        completed: false,
        index: 3,
      }]));
    })
  });
});