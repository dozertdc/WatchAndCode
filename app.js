//It should store the todos array on an object
//It should have a display todos method
//It should have an addTodo method
// It should have a changeTodo method
//It should have a deleteTodo method

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
        console.log("My Todos: " + this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue){
        this.todos[position]=newValue;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}


//testing
todoList.displayTodos();
todoList.addTodo('added todo');
todoList.changeTodo(1, 'item 2 updated');
todoList.deleteTodo(0,1);

