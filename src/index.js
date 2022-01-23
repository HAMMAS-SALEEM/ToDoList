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
const clearCompleted = document.querySelector('.clear-completed');

window.addEventListener('load', () => {
  displayToDos(todoContainer);
});

addBtn.addEventListener('click', () => {
  const todoContainer = document.querySelector('.todos-container');
  const inputVal = input.value;
  addItem(inputVal);
  input.value = '';
  displayToDos(todoContainer);
});

todoContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'I' && e.target.classList.value === 'fas fa-trash-alt') {
    const {
      id,
    } = e.target;
    removeItem(id);
    displayToDos(todoContainer);
  } else if (e.target.tagName === 'INPUT' && e.target.type !== 'checkbox') {
    e.target.readOnly = false;

    const {
      id,
    } = e.target;
    getDescriptionInput(e.target, id);
  } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const id = e.target.id.replace('check-', '');
    markCompleted(e.target, id, todoContainer);
  }
});

clearCompleted.addEventListener('click', () => {
  clearMethod(todoContainer);
});