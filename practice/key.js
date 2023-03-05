// const obj = {
//   a: 1,
//   b: '2',
//   c: 3,
//   d: true,
//   e: {'a':1}
// }


// 1. key와 value 매개변수
// const objStr1 = JSON.stringify(obj, (key, value) => {
//   console.log(key); //첫번째 키만 잡음

//   // if (key && key < 'a' || key > 'c') {
//   //   // 해당 프로퍼티 생략
//   //   return undefined;
//   //   // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
//   //   // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
//   //   // key와 value를 로그로 출력해보며 확인해 볼 것
//   // }
//   // if (typeof value === 'number') {
//   //   return value * 10;
//   // }
//   // return value;
// });
// console.log(objStr1);
// console.log('//////////////////////')

// const obj1 = '{"a": 1,"b": "2","c": 3,"d": true,"e": {"a":1}}';
// //JS에서 참조형 데이터 key의 value의 내부 값은 반환이 안됨.
// const obj2 = JSON.parse(obj1, (key, value) => {
//   if (key && key < 'a' || key > 'c') {
//     // 해당 프로퍼티 생략
//     return undefined;
//     // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
//     // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
//     // key와 value를 로그로 출력해보며 확인해 볼 것
//   }
//   if (typeof value === 'number') {
//     return value * 10;
//   }
//   return value;
// });
// console.log(obj2);

// const test = '';
// if(test < 'a'){
//   console.log('0보다작음')
// }else{
//   console.log('0보다큼')
// }

const objStr = {a:1,b:"ABC",c:true,d:[1,2,3]};
console.log(Object.values(objStr));

// const obj = JSON.stringify(objStr, (key, value) => {
//   if (key === 'c') { 
//     // 해당 프로퍼티 생략
//     return undefined;
//   }
//   if (typeof value === 'number') {
//     return value * 100;
//   }
//   return value;
// });

// console.log(obj); // ⚠️ 내부까지 적용(배열 확인해 볼 것)