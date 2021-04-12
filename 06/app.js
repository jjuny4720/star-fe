// let a = 'aa';
// const b = 'bb';
// var c = '11';


// 화살표 함수
// const arr = [1, 2, 3];
// const newArr = arr.map((item) => item+1);
// console.log(newArr);

// 전개구문
function sum(x, y, z) 
{
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

// Rest 파라미터
function func(...param) 
{
    console.log(param);
}
func(1, 2, 3);

// 구조 분해 할당
const [c1, c2] = words;
console.log(c1,c2);


// 향상된 객체 리터럴
const number = 1234;
const student = 
{
  number,
};
