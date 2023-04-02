// const test1 = new Map([{'x':2},2]);

const test2 = new Set([1,2]);
// test1.set({x:1},1)
const obj = {[{x:1}]:1};

console.log(obj);

const map2 = new Map([
  ['x', 1],
  [123, 'ABC'],
  [true, { a: 1, b: 2 }],
  [{a: 1, b:2}, true]
]);

console.log(map2);