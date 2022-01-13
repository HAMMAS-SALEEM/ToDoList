export const addItem = (arr,value) => {
    if(JSON.parse(localStorage.getItem('todos'))==null) {
        arr = []
    }
        else {
        arr = JSON.parse(localStorage.getItem('todos'))
    }

    let length = arr.length
    console.log(arr)
    let obj = {description: value, completed: false, index: length+=1}
    arr.push(obj)
    localStorage.setItem('todos',JSON.stringify(arr))
}

export const removeItem = (id) => {
    console.log(id)
    let arr = JSON.parse(localStorage.getItem('todos'))
    arr = arr.filter(e=>e.index != id)
    localStorage.setItem('todos', JSON.stringify(arr))
}

