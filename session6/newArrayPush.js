// const test = new Array({0:1});
// console.log(test);

// const test1 = new Array([1,2,3]);
// console.log(test1);

// const test3 = new Array(3);
// console.log(test3);
// // test3[0].push(1); // 오류
// // console.log(test3);

// test3.push(1);
// console.log(test3); // 기존 만들어진 length 뒤에 1이 psuh됨

// test3[0] = 1;
// console.log(test3);

// const arr = [1, 2, 3, 4, 5];

// // 💡 한 단계만 펼침
// console.log(
//   arr.flatMap(i => [i, [i], [[i]]])
// )
// const arr = [1, 2, 3, 4, 5];

// console.log(
//   arr.flatMap(i => i)
// );
// console.log(
//   arr.flatMap(i => [i, i, i])
// );

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
