//Obtener las referencias

let post =document.getElementById("ButtonPost")
let clear =document.getElementById("ButtonClear")
let mark =document.getElementById("ButtonMark")
let del =document.getElementById("ButtonDelete")

//Registrar el evento

post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)

function TodoPost(event) {
    event.preventDefault()

    let todo = document.getElementById("todoText").value
    let list = document.getElementById("todoList")

    let div = document.createElement("div")
    let input = document.createElement("input")
    let label = document.createElement("label")

    /*
    div
    input checkbox
    label text for the checkbox

    insert this to the list
    */
    input.type = "checkbox"
    input.name = "todo"

    label.textContent = todo

    div.appendChild(input)
    div.appendChild(label)

    list.appendChild(div)
}

function TodoClear() {
    let todos = document.getElementsByName("todo")
    for (let i = 0 ; i < todos.length ; i++){
        todos[i].checked = false
    }
}

function TodoMark() {
    let todos = document.getElementsByName("todo")
    for (let i = 0 ; i < todos.length ; i++){
        todos[i].checked = true
    }
}

function TodoDel() {
    let todos = document.getElementsByName("todo")
    for (let i = 0 ; i < todos.length ; i++){
        if (todos[i].checked){
            todos[i].parentElement.remove()
        }
    }

}