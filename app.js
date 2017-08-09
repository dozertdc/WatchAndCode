//toggleAll: If everything is true, make everything false
//toggleAll: Otherwise, make everything true

var todoList = {
    todos: [],
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText){
        //this.todos[position]=newValue;
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
    }
}


// We want to get access to the display todos button
// We want to run the displayTodos method, when clicks the display
// todos button.
var handlers = {
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position){
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    }
};

//There should be an li element for every Todo
//Each li element should contain .todoText
//There should be a way to create delete buttons
//There should be a delete button for each todo
//Each li should have an id that has the todo position
//clicking a delete should log the id to the console
//clicking delete should update todoList.todos and the DOM
var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = "";
        for(var i=0; i<todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if(todo.completed === true){
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }else{
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event){

            //Get the element that was clicked on
            var elementClicked = event.target;

            //Check if elementClicked is a delete button.
            if(elementClicked.className === 'deleteButton'){
                //Run handlers.deleteTodo
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }

        });
    }
};

view.setUpEventListeners();