class Person {
  constructor (name, age, married = false) {
    return {name, age, married}
  }
}

const person1 = new Person('박영희', 30, true);
const person2 = new Person('오동수', 18);
console.log(person1, person2);


//결과는 같지만, this자체가 return이기 때문에 객체가 가지고 있는다.
//아래처럼 내부적으로 꼬일 수가 있음
class People {
  constructor (name, age, married = false) {
    this.name = name;
    this.age = age;
    this.married = married
  }
}

const person3 = new People('박영희', 30, true);
const person4 = new People('오동수', 18);
console.log(person1, person2);

class Dog {
  bark () {
    return '멍멍';
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());

// function Dog2 () {
//   this.bark = function () {
//     return '멍멍';
//   }
// }
// const badugi = new Dog2();
// console.log(badugi, badugi.bark());

const afterBadugi = new Dog();
console.log(afterBadugi, afterBadugi.bark());

Dog.name = '멍';
Dog.age = '13';

console.log(Dog);

class test {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  bark () {
    '야옹';
  }
}

const cat1 = new test('별이', 1);
console.log(cat1);

test.brand = '동물농장';
console.log(test);

function Zoo (name, age) {
  this.name = name;
  this.age = age;
  this.bark = function (how) {
    return `${this.name}는 ${how}으로 울지요`
  }
}

const ani1 = new Zoo ('양이', 11);
console.log(ani1);
console.log(ani1.bark('야옹'));
Zoo.no = '010-000-0000';
Zoo.intro = function () {return '찾으시는거 있으시면 말씀 해 주세요!'};

console.log(Zoo);
console.log(Zoo.no, Zoo.intro());