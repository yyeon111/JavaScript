// const obj = {
//   x: 1,
//   y: 2,
//   z: 3,
//   w: 4
// };

// const {x, z, ...rest} = obj;
// console.log(x, z, rest);

// const arr = [1, 2, 3, 4];

// const [o, p, ...rested] = arr;
// console.log(o, p, rested);

const arr = ['A', 'B', 'C', 'D', 'E'];
const set = new Set(arr);
const [a, b, ...rest] = set;

console.log(a);
console.log(b);
console.log(rest);

function test ([a, ...b]) {
  console.log(a, b);
}

test(arr);

set.forEach(i => console.log(i));