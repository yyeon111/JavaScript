// console.log(globalThis);

// function func () {
//   console.log(this);
// }

// func();
// 'use strict';

// function func(){
//   console.log(this);
// }

// func();

const obj = {
  x: 123,
  getX: function () {
    return this.x;
  }
}

console.log(obj.getX());

function Person (name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    return `저는 ${this.name}, ${this.age}세입니다.`
  }
}

console.log(
  new Person('홍길동', 20).introduce()
);

function test () {
  return 'hello';
}
console.log(test().split(''));

class People {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다`;
  }
}

console.log(
  new People('강남', 1).introduce()
)