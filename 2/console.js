const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});
    // or, using ES2015 object property shorthand:
    // console.assert(number % 2 === 0, {number, errorMsg});
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}

// let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
console.log(greet());
user = "alice";
greet(); //function 안에 count 가 있기 때문에 cosnole에 찍힘
console.countReset();
greet();
console.count('count'); //label로 찍힘


// let user = "";

// function greet() {
//   console.count('name');
//   console.count(age);
//   return "hi " + age;
// }

// age = "18"; //1
// console.log(greet());
// user = "alice";
// greet(); //2
// greet(); //3
// console.count('hi'); //1
// console.count('hi');

// console.clear();

// const arr = [1, 2, 3];
// console.dir(Symbol);
// console.dir();

// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");

// console.warn('warn');
// console.group();
// console.info('info');
// console.group();
// console.error('error');
// console.group();
// console.log('log');
// console.groupEnd();
// console.log('log');

// function add () {
//   return a + b;
// }

// const a = 1;
// const b = 2;
// console.log(add());

// function Person (firstname, lastname){
//   this.firstname = firstname
//   this.lastname =lastname
// }
// const firstname = 'Nora';
// const lastname = 'Park'
// const me = new Person(firstname, lastname);
// console.log(me);

// console.table(me);

function obj (name, age, school) {
  return {name, age, school}
}
const name = 'What';
const age = '18';
const school = 'korea';

console.log(obj('how', 20, 'Y'));

// const color = {red: '빨강', yellow: '노랑', blue: '파랑'};
// const clothes = {red: '뻘간', yellow: '노랭', blue: '푸른'};
// console.table([color,clothes], ['red', 'yellow']); //data, columns
// console.table(color);

// function hello () {
//   console.time('hello');
// }

// console.log('hello');
// hello();
// console.timeEnd('hello'); //timeEnd전 까지 함수가 호출된 시간이 찍힘

function foo() {
  function bar() {
    console.trace(); //해당 함수 시작으로 추적
  }
  bar();
}

foo();

