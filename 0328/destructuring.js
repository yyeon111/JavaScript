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

// const arr = ['A', 'B', 'C', 'D', 'E'];
// const set = new Set(arr);
// const [a, b, ...rest] = set;

// console.log(a);
// console.log(b);
// console.log(rest);

// function test ([a, ...b]) {
//   console.log(a, b);
// }

// test(arr);

// set.forEach(i => console.log(i));

// const arr = new Set([1, 2, 3, 4]);
// // added.a = 0;
// // console.log(added);
// // added.push(0);
// // console.log(added);
// added.add({x:1, y:2});
// console.log(added.keys());
// console.log(added.entries());


// const arr = new Set([1, 2, 3, 4]);
// const [x, y, ...z] = arr;
// console.log(x, y, z); // 1 2 [3, 4]

// const obj = {a: 1, b: 2, c: 3, d: 4};
// const {a, c, ...rest} = obj;
// console.log(a, c, rest);// 1 3 {b: 2, d: 4}

const arr = [1, 2, 3];
delete arr[1];
console.log(arr);

const obj = {x: 1, y: 2, z: 3};
delete obj['y'];
console.log(obj);

arr.unshift(0);
console.log(arr);

arr.splice(2,0,2);
console.log(arr);