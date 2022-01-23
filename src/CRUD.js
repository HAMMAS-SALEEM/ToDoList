import {StorageManager} from './storageManager.js';

export const addItem = (value) => {
  let arr;
  if (StorageManager.getLocStore() == null) {
    arr = [];
  } else {
    arr = StorageManager.getLocStore();
  }

  const length = arr.length + 1;
  const obj = {
    description: value,
    completed: false,
    index: length,
  };
  arr.push(obj);
  StorageManager.setLocStore(arr)
  return arr;
};

export const removeItem = (id) => {
  let arr = StorageManager.getLocStore();
  arr = arr.filter((e) => e.index.toString() !== id.toString());
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  StorageManager.setLocStore(arr)
  return id;
};

export const updateItem = (value, id) => {
  const arr = StorageManager.getLocStore();
  arr[id - 1].description = value.trim();
  StorageManager.setLocStore(arr)
};

export const getDescriptionInput = (input, id) => {
  const inputDescription = input;
  input.addEventListener('blur', () => {
    updateItem(inputDescription.value, id);
  });
};

export const displayToDos = (output) => {
  let storeManage = StorageManager.getLocStore();
  output.innerHTML = null;
  storeManage.forEach((item) => {
    let checkBox;
    item.completed ? checkBox='checked' : null;
      output.innerHTML += `<li class="todos">
        <ul class="todos-01" >
        <li><input type="checkbox" id="check-${item.index}" class=" toDoItems" ${checkBox}></li>
        <li><input type='text' value="${item.description}" class="toDoItems tdt inputs" id=${item.index} readOnly></input></li>
        </ul>
        <i class="fas fa-ellipsis-v"></i>
        <i class="fas fa-trash-alt" id="${item.index}"></i>
    </li>`;
  });
};

export const markCompleted = (checkbox, id, todoContainer) => {
  const arr = StorageManager.getLocStore();
  arr[id - 1].completed = checkbox.checked;
  StorageManager.setLocStore(arr);
  displayToDos(todoContainer);
};

export const clearMethod = (todoContainer) => {
  let arr = StorageManager.getLocStore();
  arr = arr.filter((todo) => todo.completed !== true);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  StorageManager.setLocStore(arr)
  displayToDos(todoContainer);
};