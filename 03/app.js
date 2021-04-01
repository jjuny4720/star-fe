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


var a = 1;
var b = a;
b = 2;
console.log(a, b); 

var a = [1];  /
var b = a;
b[0] = [2];
console.log(a, b); 

var a = {x:1};
var b = a;
b.x = 2;
console.log(a, b); 


function byValue(count) {
	count = count+2;
}
var count = 3;
byValue(count);
console.log(count); 


function byReference(count) {
	count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count);  

var isMan = true;
if(isMan) {
    console.log('나는 남자');
} else {
    console.log('나는 여자');
}


alert('안녕하세요'); 

var who = prompt('당신은 누구?');
console.log(who);

var isDelete = confirm('정말 삭제?'); 
console.log(isDelete);


var sum = 0;
var num = prompt('더할 숫자를 입력해주세요');
while(num !== null) {
    sum+= parseInt(num);
    num = prompt('더할 숫자를 입력해주세요');
}
alert('숫자의 총 합은: '+sum);


function test() {
    console.log('test()');
} 

var id = setTimeout(test, 1000);  
var id = setInterval(test, 1000); 


function test() {
    console.log('test()');
    setTimeout(test, 1000);
}

test();
clearTimeout(id);
clearInterval(id);



function sum(a, b) {
    return a+b;
}
console.log(sum(1, 2));

function mult(a) {
    console.log(a+'단 출력');
    for(var j=1; j<10; j++) 
        console.log(i+'x'+j+'='+(i*j));
}

for(var i=1; i<10; i++) {
    mult(i);
}


var car = {
    year:'2014',
    starting: function() {
        console.log('starting ..'); 
    },
};
car.starting();

var person = {
    name:'Minju Kang',
    birth: 20000312,
    sayHi: function(a) {
        console.log('Hi '+a+'~ Good to see you');
    },
}

person.sayHi('Nick');


var car = function() {
    
};


(function() {
    
})();


function sum(x, y) {
    if(!y) y=1;
    console.log(x+y);
}
sum(3);

function sum() {
    var size = 0;
    for(var i=0; i<arguments.length; i++) {
        size += arguments[i]; 
    }
    console.log(size);
}

sum(1, 2, 3, 4, 5, 7);

var text = 'abc def'; 
var testReg = /abc/;  
var result = testReg.test(text);
console.log(result); 

var text = 'abc def'; 
var matchReg = /abc/; 
var result = text.match(matchReg);
console.log(match); 

var text = 'abc def';    
var replaceReg = /def/;  
var result = text.replace(replaceReg, 'ㄱㅏㄴㅏㄷㅏ');
console.log(result);