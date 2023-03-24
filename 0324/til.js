// const arr = [1, 2, 3, 4];

// arr.forEach((itm, idx, arr ) => { 
//   arr[idx]++;
//   }
// )
// console.log(arr); // [2, 3, 4, 5]

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = Array.from(arr1, x => x + 1);
// const arr3 = Array.from(arr1, x => x * x);
// const arr4 = Array.from(arr1, x => x % 2 ? '홀' : '짝');

// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr1);

// const maped2 = arr1.map( x => x + 1 );
// const maped3 = arr1.map( x => x * x );
// const maped4 = arr1.map( x => x % 2 ? '홀' : '짝');
// console.log(maped2);
// console.log(maped3);
// console.log(maped4);
// console.log(arr1);

// const arr = [1, 2, '삼', 4, '오'];

// const result = arr.find(i => typeof i === 'string');
// console.log(result); // 삼
// const answer = arr.findLast(i => typeof i === 'string');
// console.log(answer); // 오

// const result = arr.findIndex(i => typeof i === 'number');
// const answer = arr.findLastIndex(i => typeof i === 'number');
// console.log(result, answer); // 0 3
// const error = arr.findIndex(i => typeof i === 'boolean');
// console.log(error); // -1

// const original = [1, 2, 3, 4, 5];

// const isSome = original.some(i => typeof i === 'number');
// const isEvery = original.every(i => typeof i === 'number');
// console.log(isSome, isEvery); // true, true

// const original = [1, 2, 3, '사', '오'];

// const result = original.filter(i => typeof i === 'string');
// console.log(result); //['사', '오']

// const arr = [1, 2, 3];
// const result = arr.reduce((prev, curr) => prev + curr );
// console.log(result); // 6

// const init = arr.reduce((prev, curr) => prev + curr, 6);
// console.log(init); // 12

// const arr = [1, 2, 3];

// console.log(
//   arr.reduce((prev, curr) => {
//     return {
//       odd: prev.odd + curr % 2,
//       even: prev.even + (1 - curr % 2)
//     }
//   }, {odd: 0, even: 0})
// );

// const arr = [1, 2, 3, 4, 5];

// arr.sort((a,b) => a - b);
// console.log(arr); // [1, 2, 3, 4, 5]
// arr.sort((a,b) => b - a);
// console.log(arr); // [5, 4, 3, 2, 1]

// arr.sort((a,b) => a > b ? 1 :-1);
// console.log(arr); // [1, 2, 3, 4, 5]
// arr.sort((a,b) => a < b ? 1 : -1);
// console.log(arr); // [5, 4, 3, 2, 1]

const arr = [1, 2, 3, 4, 5];

arr.flatMap(i => i);
console.log(arr);

const multiple = [1, [2, [3, [4]]]];

console.log(multiple.flatMap(i => i));
console.log(arr.flatMap(i => i * 2))

const word = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열';

console.log(
  word
  .split(' ')
  .flatMap(i => i.split(''))
);