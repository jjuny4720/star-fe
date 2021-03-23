console.log('app.js');



//  Create
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);

//Read

todos.forEach(function(todo)
{
    console.log(todo);
});

//Update
var todos  = ['운동', '게임'];
var updateTodo = '게임';
var updateIndes = todos.findIndex(function(todo)
{
    return todo === updateTodo;
});

todos[updateIndex] = '공부' ;
console.log(todos) ;

//Delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex  = todos.findIndex(function(todo)
{
    return todo === deleteTodo;
});
// todos.splice(deleteIndex, 1);
// console. log(todos);

// var isMan = true;
// if(isMan) 
// {
//     console.log('1');
// }else{
//     console.log('2');
//     }