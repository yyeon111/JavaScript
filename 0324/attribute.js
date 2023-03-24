// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));

// console.log(Object.isFrozen('PI'));

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
// // console.log( // ⚠️ 누락된 어트리뷰트들 확인해볼 것
// //   Object.getOwnPropertyDescriptors(person)
// // );

// console.log(Object.getOwnPropertyDescriptors(person));

// const person = {};

// Object.defineProperty(person, 'fullname', {
//   value: 'Nora',
//   writable: true
// });

// Object.defineProperty(person, 'name', {
//   get() {
//     return this.fullname
//     .split('')
//     .map((itm, idx) => idx=== 0 ? itm : '*')
//     .join('');
//   },
//   enumerable: true,
//   configurable: true
// });

// console.log(person); // {}
// console.log(Object.getOwnPropertyDescriptors(person)); // 확인 가능

// const obj = new Object({x:1, y:2});
// console.log(obj); //확인가능
// console.log(Object.getOwnPropertyDescriptors(obj)); //확인 가능

Object.defineProperties(person, {
  'fullname': {
    value: 'Nora',
    writable: true
  },
  'krAge': {
    value: 20,
    writable: true
  },
  'name':{
    get() {
      return this.fullname
      .split('')
      .map((itm, idx) => idx === 0 ? itm : '*')
      .join('')
    },
    enumerable: true,
    configurable: true
  },
  'age': {
    set(age) {
      this.krAge = age;
    },
    enumerable: true,
    configurable: true
  }
});

console.log(person);
person.age = 18;
console.log(person); //getter,setter가능
console.log(Object.getOwnPropertyDescriptors(person));