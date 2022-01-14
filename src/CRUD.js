export const addItem = (arr, value) => {
    if (JSON.parse(localStorage.getItem('todos')) == null) {
        arr = []
    } else {
        arr = JSON.parse(localStorage.getItem('todos'))
    }

    let length = arr.length
    console.log(arr)
    let obj = {
        description: value,
        completed: false,
        index:length
    }
    arr.push(obj)
    localStorage.setItem('todos', JSON.stringify(arr))
}

export const removeItem = (id) => {
    console.log(id)
    let arr = JSON.parse(localStorage.getItem('todos'))
    arr = arr.filter(e => e.index != id)
    localStorage.setItem('todos', JSON.stringify(arr))
}

export const updateItem = (arr,id,name)=>{
    console.log(arr.length)
    for(let i=0;i<arr.length;i+=1){
      if(arr[i].id==id) {
        arr[i].description=name
      }
    }
 }

 export const displayToDos = (locStorage, output) => {
    output.innerHTML = null
    locStorage.forEach((item) => {
        output.innerHTML += `<li class="todos">
          <ul class="todos-01" >
          <li><input type="checkbox" class=" toDoItems"></li>
          <li><input type='text' value="${item.description}" class="toDoItems tdt" id=${item.index} readOnly></input></li>
          </ul>
          <i class="fas fa-ellipsis-v"></i>
          <i class="fas fa-trash-alt" id="${item.index}"></i>
      </li>`;
    })
};


// export const display = () => {
//     let output = document.createElement('ul')
//     output.classList.add('todos')
//     let li = document.createElement('li');
//     li.classList.add('todos-01')
//     output.appendChild(li)
//     let ul2 = document.createElement('ul')
//     ul2.classList.add('toDoItems')
//     li.appendChild(ul2)
//     let li2 = document.createElement('li')
//     ul2.appendChild(li2)
//     let input01 = document.createElement('input')
//     input01.classList.add('toDoItems')
//     li2.appendChild(input01)
//     console.log(output)
// }