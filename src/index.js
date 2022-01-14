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
  } else if(e.target.tagName=='INPUT'){
    console.log(e)
  }
})


// todoContainer.addEventListener('click', (e) => {
//   // if (e.target.tagName == 'INPUT') {
//   //   e.target.readOnly = false;
//   //   let parent = e.target.parent
//   //   // parent.style.background="background-color: rgba(240, 255, 104, 0.9);"
//   //   let arr = JSON.parse(localStorage.getItem('todos'));
//   //   let id = e.target.id
//   //   let val = input.value
//   //   console.log(val)
//   //   updateItem(arr, id, val)
//   //   localStorage.setItem('todos', JSON.stringify(arr))
//   //   // console.log(arr)
//   // }

// })

window.addEventListener('load', () => {
  displayToDos(arr, todoContainer)
})