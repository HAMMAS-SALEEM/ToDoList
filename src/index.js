import './style.css';
import {
  addItem,
  removeItem,
  displayToDos,
  getDescriptionInput,
  markCompleted,
  clearMethod
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
const clearCompleted = document.querySelector('.clear-completed')
let updateArr;

let arr;
if (locStorage == null) {
  arr = []
} else {
  arr = locStorage
}


window.addEventListener('load', () => {
  displayToDos(arr, todoContainer)
})

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
  } else if (e.target.tagName == 'INPUT' && e.target.type !== "checkbox" ) {
    e.target.readOnly = false;
    
    let id = e.target.id
    let arr = JSON.parse(localStorage.getItem('todos'));
    getDescriptionInput(e.target, arr, id);
  // } else if (e.target.tagName == 'INPUT' && e.target.type === "checkbox" ) {
  //    let id = e.target.id.replace("check-", "");
  //    markCompleted(e.target, id, todoContainer);

  }
  
});

// clearCompleted.addEventListener('click', () => {
//   clearMethod(todoContainer);
// });