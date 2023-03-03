// 배열에 사용할 경우
const arr = [1, 2, 3, 4, 5];

console.log(
  Object.keys(arr),
  Object.values(arr),
  Object.entries(arr)
);

const temp = Object.entries(arr);
console.log(typeof temp[0][0]);