//It should have a place to store todos
var todos = ['item 1', 'item 2', 'item 3'];

//It should have a way to display todos
console.log('My Todos: ' + todos);

//It should have a way to add todos
todos.push('item 4');

// It should have a way to change todos
todos[0]='item 1 updated';

//It should have a way to delete todos
todos.splice(0, 1);

console.log(todos);

