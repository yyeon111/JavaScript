const arr = new Array(3);

console.log(arr);

//어러개
// const arr1 = new Array(1, 2, 3);
// const arr2 = new Array('ABC');
// const arr3 = new Array(true);

// console.log(arr1);
// console.log(arr2)
// console.log(arr3)

// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
// const arr1 = Array.of(3);

// const arr2 = Array.of(1, 2, 3);
// const arr3 = Array.of('ABC', true, null);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// const arr1 = Array.from([1, 2, 3]);
// const arr2 = Array.from('ABCDE');
// const arr3 = Array.from({
//   '0': true,
//   '1': false,
//   '2': null,
//   length: 3
// });

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
// const arr1 = Array.of(3);

// const arr2 = Array.of([1, 2, 3]);
// // const arr3 = Array.of('abcd');
// const arr4 = Array.from({
//   'a': true,
//   'b': false,
//   'c': null,
//   length:3
// })


// console.log(arr1);
// console.log(arr2);
// // console.log(arr3);
// console.log(arr4);

// const arr1 = [1, 2, 3];
// const arr2 = Array.from(arr1);
// arr2.push(4);

// console.log(arr1, arr2);
// arr1[0] = 0;

// console.log(arr1, arr2);

// const arr1 = [{x: 1}, {x: 2}];
// const arr2 = Array.from(arr1);
// arr2.push({x: 3});

// // 참조타입 요소의 내부값이 바뀔 경우
// arr1[0].x = 0;
// console.log(arr1, arr2);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = Array.from(arr1, x => x + 1);
const arr3 = Array.from(arr1, x => x * x);
const arr4 = Array.from(arr1, x => x % 2 ? '홀' : '짝');

console.log(arr2);
console.log(arr3);
console.log(arr4);