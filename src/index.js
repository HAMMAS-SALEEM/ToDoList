import './style.css';

const todoContainer = document.querySelector('.todos-container');

const arr = [{
  description: 'wash the dishes',
  completed: false,
  index: 0,
}, {
  description: 'complete your assignment',
  completed: true,
  index: 1,
}, {
  description: 'complete the todo list',
  completed: false,
  index: 2,
}];

const displayToDos = () => {
  arr.forEach((item) => {
    todoContainer.innerHTML += `<li class="todos widthHeight">
        <ul class="todos-01">
        <li><input type="checkbox" class=" toDoItems"></li>
        <li><p class="toDoItems">${item.description}</p></li>
        </ul>
        <i class="fas fa-ellipsis-v"></i>
    </li>`;
  });
};

window.onresize.apply = displayToDos();