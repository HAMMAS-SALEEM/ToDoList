export const addItem = (arr, value) => {
  if (JSON.parse(localStorage.getItem('todos')) == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem('todos'));
  }

  const length = arr.length + 1;
  const obj = {
    description: value,
    completed: false,
    index: length,
  };
  arr.push(obj);
  localStorage.setItem('todos', JSON.stringify(arr));
};

export const removeItem = (id) => {
  let arr = JSON.parse(localStorage.getItem('todos'));
  arr = arr.filter((e) => e.index.toString() !== id.toString());
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  localStorage.setItem('todos', JSON.stringify(arr));
};

const updateItem = (value, id) => {
  const arr = JSON.parse(localStorage.getItem('todos'));
  arr[id - 1].description = value.trim();
  localStorage.setItem('todos', JSON.stringify(arr));
};

export const getDescriptionInput = (input, arr, id) => {
  const inputDescription = input;
  input.addEventListener('keyup', () => {
    // const valLen = inputDescription.value.length;
    // if (valLen > 0) {
    updateItem(inputDescription.value, id);
    // } else {
    //   setTimeout(() => {
    //     inputDescription.value = arr[id - 1].description;
    //   }, 2000);
    // }
  });
};

export const displayToDos = (locStorage, output) => {
  output.innerHTML = null;
  locStorage.forEach((item) => {
    if (!item.completed) {
      output.innerHTML += `<li class="todos">
        <ul class="todos-01" >
        <li><input type="checkbox" id="check-${item.index}" class=" toDoItems"></li>
        <li><input type='text' value="${item.description}" class="toDoItems tdt inputs" id=${item.index} readOnly></input></li>
        </ul>
        <i class="fas fa-ellipsis-v"></i>
        <i class="fas fa-trash-alt" id="${item.index}"></i>
    </li>`;
    } else {
      output.innerHTML += `<li class="todos">
        <ul class="todos-01">
        <li><input type="checkbox" class=" toDoItems" id="check-${item.index}" checked></li>
        <li><input type='text' value="${item.description}" class="toDoItems tdt inputs completed" id="${item.index}" readOnly></input></li>
        </ul>
        <i class="fas fa-ellipsis-v"></i>
        <i class="fas fa-trash-alt" id="${item.index}"></i>
    </li>`;
    }
  });
};

export const markCompleted = (checkbox, id, todoContainer) => {
    let arr = JSON.parse(localStorage.getItem("todos"));
    arr[id - 1].completed = checkbox.checked;
    localStorage.setItem("todos", JSON.stringify(arr));
    displayToDos(arr, todoContainer);
};

export const clearMethod = (todoContainer) => {
    let arr = JSON.parse(localStorage.getItem("todos"));
    arr = arr.filter((todo) => todo.completed !== true);
    for(let i=0;i<arr.length;i++){
      arr[i].index=i+1;
    }
    localStorage.setItem("todos", JSON.stringify(arr));
    displayToDos(arr, todoContainer);
}