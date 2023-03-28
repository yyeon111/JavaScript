const arr = new Map(
  [
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]
);

const [x, ...rest] = arr;
console.log(x); // ['a', 1]
console.log(rest); // [['b', 2],['c', 3]]