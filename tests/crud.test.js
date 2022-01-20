import {
  addItem, removeItem, displayToDos, updateItem
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
  describe('Remove Function Test', () => {
    test('should return the id of removed element', () => {
      let currentData = JSON.parse(localStorage.getItem('todos'));
      addItem(currentData, 'Task one');
      addItem(currentData, 'Task two');
      addItem(currentData, 'Task three');
      addItem(currentData, 'Task four');
      const removeData = removeItem(1);
      expect(removeData).toBe(1);
    });
    test('should check if element is removed from array', () => {
      removeItem(1);
      const curData = localStorage.getItem('todos');
      expect(curData).toEqual(JSON.stringify([{
        description: 'Task two',
        completed: false,
        index: 1,
      }, {
        description: 'Task three',
        completed: false,
        index: 2,
      }, {
        description: 'Task four',
        completed: false,
        index: 3,
      }]));
    });
  });
  describe('Append and remove content to the dom', () => {
    test('Should Append li to the list', () => {
      document.body.innerHTML = '<ul class="todos-container"></ul>';
      const output = document.querySelector('.todos-container');
      const curData = JSON.parse(localStorage.getItem('todos'));
      displayToDos(curData, output);
      const currentOut = document.querySelector('.todos-container');
      expect(currentOut.childElementCount).toBe(3);
    });
    test('Should remove li to the list', () => {
      document.body.innerHTML = '<ul class="todos-container"></ul>';
      const output = document.querySelector('.todos-container');
      removeItem(1);
      const curData = JSON.parse(localStorage.getItem('todos'));
      displayToDos(curData, output);
      const currentOut = document.querySelector('.todos-container');
      expect(currentOut.childElementCount).toBe(2);
    });
  });
  describe('Should Edit Item Description',()=>{
    test('Should update value',()=>{
      updateItem('Task one on one',1)
      const locStore = localStorage.getItem('todos')
      expect(locStore).toEqual(JSON.stringify([{
        description: 'Task one on one',
        completed: false,
        index: 1,
      }, {
        description: 'Task four',
        completed: false,
        index: 2,
      }]));
    })
  })
});