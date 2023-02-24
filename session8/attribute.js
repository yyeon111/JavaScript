//데이터 프로퍼티, 접근자 프로퍼티(getter, setter)

// const person = {
//   fullName : '홍길동',
//   ageInNumber: 25,

//   get name () {
//     return this.fullName
//     .split('')
//     .map((letter, idx) => idx === 0 ? letter : '*')
//     .join('');
//   },
//   get age() {
//     return this.ageInNumber + '세';
//   },
//   set age(age) {
//     this.ageInNumber = Number(age);
//   }
// };


// console.log(
//   person.name, person.age
// )

// //getOwnPropertyDescriptor
// //getOwnPropertyDescriptors
// //인자: 객체, property
// console.log(
//   Object.getOwnPropertyDescriptor(person,'fullName')
// );
// //writable 값 갱신 가능 여부 frezeez면 flase 이외에는 true
// //configurable 프로퍼티 제거, 어트리뷰트 수정 가능 여부
// //Enumerable 열거할 수 있는 이누멀어블, for in문 object.keys 사용 여부
// console.log(
//   Object.getOwnPropertyDescriptor(person,'ageInNumber')
// );
// console.log(
//   Object.getOwnPropertyDescriptor(person,'name')
// );
// console.log(
//   Object.getOwnPropertyDescriptor(person,'age')
// );

// console.log(
//   Object.getOwnPropertyDescriptors(person)
// );

//definedProperty, defineProperties
const person ={};
Object.defineProperty(person, 'fullName', {
  value: '홍길동',
  writable: true
});

Object.defineProperty(person, 'name', {
  get(){
    return this.fullName
    .split('')
    .map((letter, idx) => idx === 0 ? letter : '*')
    .join('');
  }
});

console.log(person,person.name);
// console.log(
//   Object.getOwnPropertyDescriptors(person)
// );