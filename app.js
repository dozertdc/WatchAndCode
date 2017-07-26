//toggleAll: If everything is true, make everything false
//toggleAll: Otherwise, make everything true

var todoList = {
    todos: [],
    displayTodos: function(){
        console.log('My Todos:')
        if(this.todos.length === 0){
            console.log('Your todo list is empty');
        }else{
            for(var i=0; i<this.todos.length; i++){
                if(this.todos[i].completed === true){
                    console.log("(x) " + this.todos[i].todoText);
                }else{
                    console.log("( ) " + this.todos[i].todoText);
                }
            }
        }
    },
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        //this.todos[position]=newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        //get completed todos
        for(var i=0; i<totalTodos; i++){
            if(this.todos[i].completed===true){
                completedTodos++;
            }
        }

        if(completedTodos===totalTodos){
            //Make everything false
            for(var i=0; i<totalTodos; i++){
                this.todos[i].completed=false;
            }
        }else{
            //Make everything true
            for(var i=0; i<totalTodos; i++){
                this.todos[i].completed=true;
            }
        }
        this.displayTodos();
    }
}


// We want to get access to the display todos button
// We want to run the displayTodos method, when clicks the display
// todos button.

var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});

//
var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
});