import './style.css';
import {
  addItem,
  removeItem,
  displayToDos,
  getDescriptionInput,
  markCompleted,
  clearMethod,
} from './CRUD.js';

const todoContainer = document.querySelector('.todos-container');
const addBtn = document.querySelector('.fa-plus');
const input = document.querySelector('.toDoName');
const locStorage = JSON.parse(localStorage.getItem('todos'));
const clearCompleted = document.querySelector('.clear-completed');

let arr;
if (locStorage == null) {
  arr = [];
} else {
  arr = locStorage;
}

window.addEventListener('load', () => {
  displayToDos(arr, todoContainer);
});

addBtn.addEventListener('click', () => {
  if (input.value === '' || input.value === null) {
    alert('Please insert a todo')
  } else {
    const todoContainer = document.querySelector('.todos-container');
    const inputVal = input.value;
    addItem(arr, inputVal);
    const locStorage = JSON.parse(localStorage.getItem('todos'));
    input.value = '';
    displayToDos(locStorage, todoContainer);
  }
});

todoContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'I' && e.target.classList.value === 'fas fa-trash-alt') {
    const {
      id
    } = e.target;
    removeItem(id);
    const locStorage = JSON.parse(localStorage.getItem('todos'));
    displayToDos(locStorage, todoContainer);
  } else if (e.target.tagName === 'INPUT' && e.target.type !== 'checkbox') {
    e.target.readOnly = false;

    const {
      id
    } = e.target;
    const arr = JSON.parse(localStorage.getItem('todos'));
    getDescriptionInput(e.target, arr, id);
  } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const id = e.target.id.replace('check-', '');
    markCompleted(e.target, id, todoContainer);
  }
});

clearCompleted.addEventListener('click', () => {
  clearMethod(todoContainer);
});