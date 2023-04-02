// function isString(itm) {
//   if (typeof itm === 'string') {
//     return itm;
//   }
//   // return undefined;
// } 

// ['123', 123, '일이삼'].forEach(i => console.log(isString(i)));

// const objs = [
//   { func () { console.log(1) } },
//   {},
//   { func () { console.log(2) } },
//   {},
//   { func () { console.log(3) } },
// ]

// objs.forEach(o => o.func?.());

// // 최소 undefined
// // 최대 {prop1:{prop2:{prop3:'성공!'}}}
// // 까지 반환하는 함수
// const rand = () => Math.random() < 0.75;

// const notSure = () => rand() ? {
//   prop1: rand() ? {
//     prop2: rand() ? {
//       prop3: rand() ? '성공!' : undefined
//     } : undefined
//   } : undefined
// } : undefined;

// // 옵셔널 체이닝을 사용한 방법
// const result = notSure();

// console.log(
//   result?.prop1?.prop2?.prop3
// );

const a = [{abc(){return {a: 1}}}, {}, {abc(){console.log('abc')}}];

a.forEach(i => console.log(i.abc?.()?.a));
// const b = () => {return {a: 1}};
// const obj = b();
// console.log(obj.a);
// const test2 = 0;

// console.log(test2?.());

// let undef = undefined;

// console.log(
//   undef?.x,
//   undef?.['x'],
//   undef?.[1],
//   {}.func?.()
// );