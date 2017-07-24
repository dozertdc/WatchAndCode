//It should have a place to store todos
var todos = ['item 1', 'item 2', 'item 3'];

//It should have a function to display todos
function displayTodos(){
    console.log("My Todos: " + todos);
}

//It should have a function to add todos
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
// It should have a function to change todos
function changeTodo(position, newValue){
    todos[position]=newValue;
    displayTodos();
}


//It should have a function to delete todos
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

//testing
displayTodos();
addTodo('added todo');
changeTodo(1, 'item 2 updated');
deleteTodo(0,1);

