// const person = {
//   name: '김달순',
//   age: 23,
//   languages: ['Korean', 'English', 'French'],
//   education: {
//     school: '한국대',
//     major: ['컴퓨터공학', '전자공학'],
//     graduated: true,
//   }
// };

// const personStr = JSON.stringify(person);

// console.log(typeof personStr);
// console.log(personStr);

// [
//   JSON.stringify(1),
//   JSON.stringify(Infinity), // ⚠️
//   JSON.stringify(NaN), // ⚠️
//   JSON.stringify('가나다'),
//   JSON.stringify(true),
//   JSON.stringify(null),
//   JSON.stringify(undefined),
//   JSON.stringify([1, 2, 3]),
//   JSON.stringify({x: 1, y: 2}),
//   JSON.stringify(new Date()), // ⚠️
// ]
// .forEach(i => console.log(i));

// // 이후 배울 Symbol - 직렬화되지 않음
// console.log( JSON.stringify(Symbol('hello')) ); // ⚠️
// 이후 배울 BigInt - 오류 발생
// console.log( JSON.stringify(1n) ); // ⚠️

// const obj = {
//   x: 1,
//   y: 2,
//   z: function () { return this.x + this.y }
// }
// console.log(obj.z())

// const objStr = JSON.stringify(obj);
// console.log(objStr); // 제외하고

// const obj = {
//   a: 1,
//   b: '2',
//   c: 3,
//   d: true,
//   e: false
// }

// // 1. key와 value 매개변수
// const objStr1 = JSON.stringify(obj, (key, value) => {
//   console.log(key,value);
//   if (key && key < 'a' || key > 'c') {
//     // 해당 프로퍼티 생략
//     return undefined;
//     // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
//     // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
//     // key와 value를 로그로 출력해보며 확인해 볼 것
//   }
//   if (typeof value === 'number') {
//     return value * 10;
//   } else{
//     return value;
//   }
  
// });
// console.log(objStr1);

// // 2. 반환한 key의 배열 매개변수
// const objStr2 = JSON.stringify(obj, ['b', 'c', 'd']);
// console.log(objStr2);

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   }
// };

// [
//   JSON.stringify(obj, null),
//   JSON.stringify(obj, null, 1), //문단그대로 + space
//   JSON.stringify(obj, null, 2),
//   JSON.stringify(obj, null, '\t')
// ]
// .forEach(i => console.log(i));

const obj = {
  x: 1,
  y: 2,
  toJSON: function () {
    return '훗, 나를 직렬화해보겠다는 건가';
  }
}

console.log(
  JSON.stringify(obj)
);