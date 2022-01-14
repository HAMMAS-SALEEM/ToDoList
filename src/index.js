import './style.css';
import {
  addItem,
  removeItem,
  updateItem,
  displayToDos
} from './CRUD.js'
import {
  update
} from 'lodash';

const todoContainer = document.querySelector('.todos-container');
const addBtn = document.querySelector('.fa-plus')
const trashBtn = document.querySelector('.fa-trash-alt')
const dragBtn = document.querySelector('.fa-ellipsis-v')
const input = document.querySelector('.toDoName')
const locStorage = JSON.parse(localStorage.getItem('todos'));
let updateArr;

let arr;
if (locStorage == null) {
  arr = []
} else {
  arr = locStorage
}



addBtn.addEventListener('click', () => {
  const todoContainer = document.querySelector('.todos-container');
  let inputVal = input.value
  addItem(arr, inputVal)
  const locStorage = JSON.parse(localStorage.getItem('todos'));
  displayToDos(locStorage, todoContainer);
})


todoContainer.addEventListener('click', (e) => {
  if (e.target.tagName == 'I' && e.target.classList.value == 'fas fa-trash-alt') {
    let id = e.target.id
    removeItem(id);
    let locStorage = JSON.parse(localStorage.getItem('todos'));
    displayToDos(locStorage, todoContainer);
    input.value = ''
  }
})

todoContainer.addEventListener('click', (e) => {
  if (e.target.tagName == 'INPUT') {
    let value = e.target.value
    console.log(value)
    let arr = JSON.parse(localStorage.getItem('todos'));
    e.target.readOnly = false;
    let id = e.target.id
    updateItem(arr, id, value)
    localStorage.setItem('todos', JSON.stringify(arr))
  }
})

window.addEventListener('load', () => {
  displayToDos(arr, todoContainer)
})