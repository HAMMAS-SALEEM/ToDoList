import './style.css';
import {addItem,removeItem} from './CRUD.js'

const todoContainer = document.querySelector('.todos-container');
const addBtn = document.querySelector('.fa-plus')
const input = document.querySelector('.toDoName')
const removeBtn = document.getElementsByClassName('fa-trash-alt')

let arr = [];

const displayToDos = () => {
  arr = JSON.parse(localStorage.getItem('todos'))
  arr.forEach((item) => {
    todoContainer.innerHTML += `<li class="todos widthHeight">
        <ul class="todos-01">
        <li><input type="checkbox" class=" toDoItems"></li>
        <li><p class="toDoItems tdt" contenteditable="true">${item.description}</p></li>
        </ul>
        <i class="fas fa-ellipsis-v"></i>
        <i class="fas fa-trash-alt" id="${item.index}"></i>
    </li>`;
  })
};

addBtn.addEventListener('click', ()=>{
  let inputVal = input.value
  addItem(arr,inputVal)
  displayToDos();
})


todoContainer.addEventListener('click' ,(e)=>{
  if(e.target.tagName=='I'){
    let id = e.target.id
    console.log(id)
    removeItem(id)
  }  
})

// todoContainer.addEventListener('click',(e)=>{
//   let parent= e.target.parentNode
//   console.log(parent.children)
//   // if(e.target.tagName == 'I'){
//   //   let id = e.target.id;
//   //   console.log(id)
//   // }
// })

displayToDos();