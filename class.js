class Dog {
  bark () {
    return '멍멍';
  }
}

const dog1 = new Dog();
console.log(dog1); //prototype

function Dog2 () {
  this.bark = function () {
    return '멍멍';
  }
}

const dog2 = new Dog2(); //dog2의 함수
console.log(dog2);
Dog2.prototype.bark2 = function(){
  return '멍멍멍';
}
console.log(Dog2, dog2);

//정적 method 일 경우, property생략


class Chain {
  constructor (no, name) {
    this.no = no;
    this.name = name;
  }
  introduce (intro) {
    return `안녕하세요 ${this.no}호점 ${this.name}입니다. ${intro}`
  }
}

const chain1 = new Chain(1, '청년다방');
console.log(chain1);
console.log(chain1.introduce('어서오십쇼!')); 

//field consturctor에 영향을 주지 않는다.

class Fruits {
  no = 1;
  category = {new: 500, ordered: 300}; //thisx
  constructor (no, name){
    this.no = no;
    this.name = name;
  }
  introduce (price, season) {
    return `${this.name}의 가격은 ${price+this.category[season]}입니다. ${this.no}번 창구로 이동 해 주세요.`;
  }
}

const apple = new Fruits(3, '사과');
console.log(apple.introduce(15000, 'new'));
apple.category.new = 700;
console.log(apple);

const banana = new Fruits(4, '바나나');
console.log(banana);

Fruits.brand = '과일상점';
// console.log(Fruits);
Fruits.intro = function() {
  return '010-000-0000';
}
console.log(Fruits);

// class Test {
//   static brand = '채소상점';
//   static intro(){
//     return '010-111-1111';
//   }
// }
// console.log(Test);
// console.log(Test.intro());

// function constructorTest () {
  
// };
// constructorTest.brand = '채소상점';
// constructorTest.intro = function (){
//   return '010-111-1111';
// }
// console.log(constructorTest.intro());
// console.log(constructorTest);

function Students (no, name) {
  this.no = no;
  this.name = name;
//   static brand = 'A 대학교';
//   static contact = function (){

//   }
}

const student1 = new Students(1,'Nora');
Students.brand = 'A 고등학교';
Students.contact = function () {
  return 00000000000;
}
console.log(student1);
console.log(Students);
//static으로 내부에서 불가 따로 지정

//class는 내부에서 static으로 가능, 밖에서도 추가로 가능.

function a (){}
console.log(typeof a);
console.log(a instanceof Object);