const arr = new Map(
  [
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]
);

const [x, ...rest] = arr;
console.log(x);
console.log(rest);