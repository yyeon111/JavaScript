const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 홀수와 짝수 갯수
console.log(
  arr.reduce((prev, curr) => {
    return {
      odd: prev.odd + curr % 2,
      even: prev.even + (1 - (curr % 2)),
    }
  }, { odd: 0, even: 0 })
);

console.log(arr.reduce((prev,curr) => {
  return {
    odd: prev.odd + curr % 2,
    even: prev.even + (1 - curr % 2)
  }
}, {odd: 0, even: 0}
))