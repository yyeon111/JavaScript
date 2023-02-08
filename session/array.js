// const arr = new Array(3);

// console.log(arr);
// console.log(arr.length);
// console.log(
//   arr[0], arr[1], arr[2]
// );

// const arr1 = new Array(1, 2, 3);
// const arr2 = new Array('ABC');
// const arr3 = new Array(true);

// console.log(arr1);
// console.log(arr2)
// console.log(arr3)

// // 인자가 하나의 숫자라도 이를 요소로 갖는 배열 생성
// const arr1 = Array.of(3);

// const arr2 = Array.of(1, 2, 3);
// const arr3 = Array.of('ABC', true, null);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// // const arrLike = {
// //   0: '🍎',
// //   1: '🍌',
// //   2: '🥝',
// //   3: '🍒',
// //   4: '🫐',
// //   length: 5
// };
// // for ... of 문은 이터러블에서만 사용 가능
// for (const item of arrLike) {
//   console.log(item);
// }

// // 일반 for문으로 순회 가능
// for (let i = 0; i < arrLike.length; i++) {
//   console.log(arrLike[i]);
// }
// // 배열은 이터러블, 성능도 향상
// for (const item of Array.from(arrLike)) {
//   console.log(item);
// }

// const arr1 = [1, 2, 3];
// const arr2 = Array.from(arr1);
// arr2.push(4);

// console.log(arr1, arr2);

// const arr1 = [{x: 1}, {x: 2}];
// const arr2 = Array.from(arr1);
// arr2.push({x: 3});

// arr1[0].x = 0;
// console.log(arr1, arr2);

//arr1 = [{x:0},{x:2}]
//aar2 = [{x:0},{x:2}]

let arr1 = [0,1,2,3];
let arr2 = arr1;

arr1[0] = 1;
console.log(arr1);
console.log(arr2);