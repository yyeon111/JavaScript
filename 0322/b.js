// const arr = [1, 2, 3];
// const x = arr.push(4);

// console.log(x, arr); //length

// const arr = [5, 6, 7];
// const x = arr.unshift(4);

// console.log(x, arr); //length

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const x = arr.pop(); //5

// console.log(x, arr);
// const y = arr.pop(); //4

// console.log(y, arr);

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const x = arr.shift();

// console.log(x, arr);

// const y = arr.shift();

// console.log(y, arr);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// // 2번 인덱스부터 2개 요소 제거
// arr.splice(2, 2);

// console.log(arr);

// // 3번 인덱스부터 요소 제거 없이 'a' 추가
// arr.splice(3, 0, 'a');

// console.log(arr);

// // 1번 인덱스부터 3개 요소 제거 후 '가', '나', '다' 추가
// arr.splice(1, 3, '가', '나', '다');

// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// delete arr[2];

// console.log(arr);

// // 중간의 빈 값도 채움
// const arr1 = [1, 2, , , 4, 5];
// arr1.fill(7);
// // 💡 특정 값으로 채운 배열 생성시 유용
// const arr2 = new Array(10);
// arr2.fill(1);

// console.log('2.', arr2);

// console.log('1.', arr1);
// // 인자가 둘일 때: (채울 값, ~부터)
// arr2.fill(2, 3);

// console.log('3.', arr2);

// // 인자가 셋일 때: (채울 값, ~부터, ~ 전까지)
// arr2.fill(3, 6, 9);

// console.log('4.', arr2);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// // 💡 메서드 자체도 뒤집힌 배열을 반환
// arrRev = arr.reverse();

// 원본 배열 뒤집힘
// console.log(arr, arrRev);

// const arr1 = [1, 2, 3];
// const arr2 = ['a', 'b', 'c'];
// const arr3 = [true, false];
// const arr4 = arr1.concat(arr2);

// console.log(arr4);
// const arr5 = arr1.concat(arr2, 3);

// console.log(arr5);
// const arr6 = arr1.concat('ABC', arr2, arr3, 100);

// console.log(arr6);
// // ⭐️ 원본 배열들에는 변화 없음
// console.log(arr1, arr2, arr3);

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr2 = arr1.slice(3);
// const arr3 = arr1.slice(3, 7);

// console.log(arr2, arr3);


const orgArr = [
  1, 2,
  [3, 4],
  [5, [6, [7, 8]]]
];

// 인자가 없으면 1을 넣은 것과 같음
const arr0 = orgArr.flat();
const arr1 = orgArr.flat(1);

const arr2 = orgArr.flat(2);
const arr3 = orgArr.flat(3);

console.log('N:', arr0);
console.log('1:', arr1);
console.log('2:', arr2);
console.log('3:', arr3);

// const test = new Array([1, 2, 3]);
// console.log(test); // [[1, 2, 3]]
// const test1 = new Array(3); 
// console.log(test1); // [undefined, undefined, undefined]
// const test2 = new Array(1, abc, 3); // error

// /const test = Array.of(3); // [3]
// const test1 = Array.of('hello'); // ['hello']
// const test2 = Array.of(1, true, 'abc'); //[1, true, 'abc']
// const test3 = Array.of([1, 2, 3]); // [[1, 2, 3]]
// const test4 = Array.of({0: 1, 1: 2, 2: 3}); // [{0: 1, 1: 2, 2: 3}]
// console.log(test, test1, test2, test3,test4);

// const test = Array.from({
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3
// })
// console.log(test);

const arr = [1, 2, 3]
const test = Array.from(arr, x => x + 1);
console.log(arr, test);