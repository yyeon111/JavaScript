let idx = 0;
const  obj = {
  ['key-' + idx++]: `value-${idx}`, //연산자가 붙자마자를 1로 시작
  ['key-' + idx++]: `value-${idx}`,
  ['key-' + idx++]: `value-${idx}`,
  [idx ** idx]: 'POWER',
  hello: 'hello',
  'hello': 'hi',
  3: 1
}

console.log(obj['hello']);
console.log(obj['hello'])

// console.log(obj);

// const objKey = { x: 1, y: 2 };
// const arrKey = [1, 2, 3];

// const obj1 = {
//   [objKey]: '객체를 키값으로',
//   [arrKey]: '배열을 키값으로'
// }

// console.log(
//   obj1[objKey],
//   obj1[arrKey]
// );

// // ⚠️ ???????
// console.log(
//   obj1[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체
//   obj1['1,2,3'] // 문자열
// );

// // 로그를 펼쳐 키값을 볼 것 - 💡 문자열임
// // 객체와 배열이 그 자체가 아니라 문자열로 치환되어 키가 되는 것
// console.log(obj1);

// console.log(obj1['[object Object]']); //사용 할 수 없다.