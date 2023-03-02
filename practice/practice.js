// const obj = {
//   x: 1,
//   y: 2,
//   z: 3
// };

// console.log(
//   Object.keys(obj),
// );
// console.log(
//   Object.entries(obj),
// );

// // 배열에 사용할 경우
// const arr = [1, 2, 3, 4, 5];

// console.log(
//   Object.keys(arr),
//   Object.values(arr),
//   Object.entries(arr)
// );

// // 객체가 아닐 경우 객체로 변환
// const str = 'ABCDEFG';

// console.log(
//   Object.keys(str),
//   Object.values(str),
//   Object.entries(str)
// );

// const test = new Object();
// const string1 = 'abce';
// const array1 = [1, 2, 3];
// console.log(Object.assign(test,array1));

// 배열에 적용시
// const arr = 'abcd';
// Object.preventExtensions(arr);

// arr[4] = 'e'; // 동작하지 않음

// console.log(arr);

// const test = ['a'];
// console.log(Object.isSealed(test));
// Object.seal(test);
// console.log(Object.isSealed(test));
// test[0] = 'a';
// console.log(test);
// // test.push('a');
// delete test[0];
// console.log(test);
// // test.pop();

// const person = {

//   // ⭐️ 1. 데이터 프로퍼티들
//   fullName: '홍길동',
//   ageInNumber: 25,

//   // ⭐️ 2. 접근자 프로퍼티들
//   get name () {
//     return this.fullName
//     .split('')
//     .map((letter, idx) => idx === 0 ? letter : '*')
//     .join('');
//   },
//   get age () { return this.ageInNumber + '세'; },
//   set age (age) {
//     this.ageInNumber = Number(age);
//   }
// }

// console.log(Object.isExtensible(person)); //true
// console.log(Object.getOwnPropertyDescriptors(person));

// const person = {};

// // 한 프로퍼티씩 각각 설정
// Object.defineProperty(person, 'fullName', {
//   value: '홍길동',
//   writable: true
//   // 💡 누락한 어트리뷰트는 기본값으로 자동생성
// });

// Object.defineProperty(person, 'name', {
//   get () {
//     return this.fullName
//     .split('')
//     .map((letter, idx) => idx === 0 ? letter : '*')
//     .join('');
//   },
//   enumerable: true,
//   configurable: true
// });

// // console.log(person, person.name);
// console.log( // ⚠️ 누락된 어트리뷰트들 확인해볼 것
//   Object.getOwnPropertyDescriptors(person)
// );

// delete person['name'];
// console.log(person);

// // 여러 프로퍼티를 객체 형식으로 한꺼번에 설정
// Object.defineProperties(person, {
//   ageInNumber: { 
//     value: 25,
//     writable: true
//   },
//   age: {
//     get () { return this.ageInNumber + '세'; },
//     enumerable:true,
//     set (age) {
//       this.ageInNumber = Number(age);
//     },
//     enumerable:false
//   }
// });

// person.age = 30;

// console.log(person, person.age);
// console.log(
//   Object.getOwnPropertyDescriptor(person,age)
// );

const person = {};

// 한 프로퍼티씩 각각 설정
Object.defineProperty(person, fullName, {
  value: '홍길동',
  writable: true
  // 💡 누락한 어트리뷰트는 기본값으로 자동생성
});

Object.defineProperty(person, name, {
  get () {
    return this.fullName
    .split('')
    .map((letter, idx) => idx === 0 ? letter : '*')
    .join('');
  },
  enumerable: true,
  configurable: true
});

// console.log(person, person.name);
console.log( // ⚠️ 누락된 어트리뷰트들 확인해볼 것
  Object.getOwnPropertyDescriptors(person)
);