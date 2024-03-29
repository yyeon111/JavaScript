// // undefined로부터 값에 접근할 때
// let undefObj;
// console.log(undefObj.x);

// // null부터 값에 접근할 때
// let nullObj = null;
// console.log(nullObj.x);

// // 무효한 배열에 접근할 때
// let undefArry;
// console.log(undefArry[1]);

// // 존재하지 않는 함수를 호출할 때
// let noFunc = {}
// noFunc.func();

// const rand = () => Math.random();

// console.log(rand());

// const test = typeof 1 === 'number' ? {prop1: } : undefined;
// console.log(test);
// const notSure = () => 1 ? {
//   prop1: 1 ? {
//     prop2: 0 ? {
//       prop3: 0 ? '성공' : undefined
//     } : undefined
//   } : undefined
// } : undefined;

// // const test = {prop1: {prop2: {prop3: '성공'}}}

// const result = notSure();
// console.log(result);
// console.log(JSON.stringify(result));
// console.log(result.prop1.prop2.prop3); //prop3이 없을 시 에러

// const result = notSure();

// if (result) {
//   if (result.prop1) {
//     if (result.prop1.prop2) {
//         console.log(result.prop1.prop2.prop3);
//     }
//   }
// }

// function test (str) {
//   if (typeof str === 'string'){
//     return 'hello';
//   }
// }

// const answer = {property: test(1)};
// console.log(answer);

// 최소 undefined
// 최대 {prop1:{prop2:{prop3:'성공!'}}}
// 까지 반환하는 함수
const rand = () => Math.random() < 0.75;

const notSure = () => 1 ? {
  prop1: 0 ? {
    prop2: 1 ? {
      prop3: 0 ? '성공!' : undefined
    } : undefined
  } : undefined
} : undefined;

// 방법 1
const result = notSure();

if (result) {
  if (result.prop1) {
    if (result.prop1.prop2) {
      console.log(result.prop1.prop2.prop3);
    }
  }
}
console.log(notSure());

let undef = undefined;

// console.log(
//   undef?.x,
//   undef?.['x'],
//   undef?.[1],
//   {}.func?.()
// );




console.log(JSON.stringify(undef?.x));
console.log(JSON.stringify({x: {y: undefined}}))
