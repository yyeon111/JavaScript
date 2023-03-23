const arrays = [
  [], [1, 2, 3], new Array(), Array.prototype // Array.prototype은 instance는 아니다.
];

for(const i of arrays) {
  console.log(Array.isArray(i));
  console.log(i instanceof Array);
}

// const original = ['a', 'b', 'c', 'd'];
// const pushed = original.push('push'); //5
// console.log(original, pushed);

// const unshifted = original.unshift('unshift'); //6
// console.log(original, unshifted);

// const poped = original.pop();
// console.log(original, poped); // push

// const shifted = original.shift();
// console.log(original, shifted); //unshift

const original = [1, 2, 3, 4, 5];
original.splice(1, 1, 'two');
console.log(original); // [1, 'two', 3, 4, 5]
original.splice(0, 0, 'zero');
console.log(original); // ['zero', 1, 'two', 3, 4, 5]

delete original[0];
console.log(original); // [undefined, 1, 'two'. 3, 4, 5]

const reversed = original.reverse();
console.log(original, reversed); // [5, 4, 3, 'two', 2, 1], [5, 4, 3, 'two', 2, 1]

const start = new Array(5);
start.fill(0, 0, 4);
console.log(start); // [0, 0, 0, 0, undefined]

const numArray = [1, 2, 3];
const stringArray = ['a', 'b', 'c'];
const obj = {x: 1, y: 2};
const concated = numArray.concat(stringArray, obj);
console.log(numArray, concated); // [1, 2, 3], [1, 2, 3, 'a', 'b', 'c', {x: 1, y: 2}]

const originArray = [1, 2, 3, 4, 5];
const sliced = originArray.slice(2, -1);
console.log(originArray, sliced); // [1, 2, 3, 4, 5], [3, 4]

const multiple = [1, [2, 3], [4, [5, 6]], [7, [8, [9]]]];
console.log(
  multiple.flat(), // 1과 같음
  multiple.flat(1), // [ 1, 2, 3, 4, 5 ] [ 3, 4 ]
  multiple.flat(2), // [1, 2, 3, 4, 5, 6, 7, 8, [ 9 ]
  multiple.flat(3), // [1, 2, 3, 4, 5, 6, 7, 8, 9]
);