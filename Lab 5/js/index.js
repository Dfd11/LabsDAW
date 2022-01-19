
let postTodo = $(".submitButton");
let clear = $("#ButtonClear");
let mark = $("#ButtonMark");
let del = $("#ButtonDelete");
let newTodo = $("#todoText");

let list = $("#todoList")

postTodo.on("click",function(event){
    event.preventDefault();
    
    let div = $("<div>");
    let input = $("<input>")
    let label = $("<label>")

    input.attr("type","checkbox");
    input.attr("name","todo");

    label.text(newTodo[0].value);

    div.append(input);
    div.append(label);

    list.append(div);

})

clear.on("click",function(){
    let todos = $('input[name="todo"]');
    for (let i = 0 ; i < todos.length ; i++){
        todos[i].checked = false
    }
})

mark.on("click",function(){
    let todos = $('input[name="todo"]');
    for (let i = 0 ; i < todos.length ; i++){
        todos[i].checked = true
    }
})

del.on("click",function() {
    let todos = $('input[name="todo"]');
    for (let i = 0 ; i < todos.length ; i++){
        if (todos[i].checked){
            todos[i].parentElement.remove()
        }
    }

})