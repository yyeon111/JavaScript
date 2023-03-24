// const arr = [1, 2, 3, 4, 5];

// console.log(
//   arr.flatMap(i => i)
// );

// console.log(
//   arr.flatMap(i => [i, i, i])
// );

// console.log(
//   arr.flatMap(i => [i * 10, i * 100, i * 1000])
// );

const arr = [1, 2, 3, 4, 5];

// 💡 한 단계만 펼침
console.log(
  arr.flatMap(i => [i, [i], [[i]]])
)

const word = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열';

console.log(
  word
  .split(' ')
  .flatMap(i => i.split(''))
);