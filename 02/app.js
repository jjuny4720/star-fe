console.log('app.js');

var arr = [1, 2, 3];
for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

var todos = ['운동'];
var todo = '코딩';
todos.push(todo);
console.log(todos);

todos.forEach(function(todo){
        console.log(todo);
});

var updateTodo = '운동';
var updateIndex = todos.findIndex(function(todo) {
    return todo === updateTodo;
});

todos[updateIndex] = '과제';
console.log(todos);

var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) {
	if(todo===updateTodo) {
		return '공부'
	}
	return todo;
});

console.log(newTodos);


var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
	return todo === deleteTodo;
});

todos.splice(deleteIndex, 1);
console.log(todos);

var deleteTodo = '운동';
var newTodo = todos.filter(function(todo) {
    return todo !== deleteTodo;
});
console.log(newTodo);

// Value
var a = 1;
var b = a;
b = 2;
console.log(a, b); // 1 2

var a = [1];  
var b = a;
b[0] = [2];
console.log(a, b); 

// 참조 Reference
var a = {x:1};
var b = a;
b.x = 2;
console.log(a, b); // {x: 2} {x: 2} 


function byValue(count) {
	count = count+2;
}
var count = 3;
byValue(count);
console.log(count); // 3

function byReference(count) {
	count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count);  // ["1", "2"]


var isMan = true;
if(isMan) {
    console.log('나는 남자');
} else {
    console.log('나는 여자');
}


alert('안녕하세요');
var who = prompt('당신은 누구세요');
confirm('정말 삭제하시겠습니까?');

function test() {
	console.log('test()');
}

var id = setTimeout(test, 1000); // 1초 후 1번 실행
var id = setInterval(test, 1000); // 1초 마다 계속 실행


function test() {
	console.log('test()');
	setTimeout(test, 1000);
}


var nick = 'aji';  // 전역변수

function test() {
	var age = 30;
	console.log(nick, age);
}
test();
console.log(age); // age not defined!



function sum(a, b) {
    return a+b;
}
console.log(sum(1,2));

var car = {
	year: '2014',
	starting: function() {
		console.log('starting..');
	},
};

car.starting();



(function() {
    var a = 'a';
    console.log(a);
})(); 


function sum(x, y) {
    if(!y) y = 1;
    console.log(x+y);
}

sum(3);


var text = 'abc def'; 
var testReg = /abc/;  
var result = testReg.test(text);
console.log(result); 

var text = 'abc def'; 
var matchReg = /abc/; 
var result = text.match(matchReg);
console.log(match); 

var text = 'abc def';    /
var replaceReg = /def/;  
var result = text.replace(replaceReg, '가나다');
console.log(result);