// const arr1 = [];
// const arr2 = [1, 2, 3];
// const arr3 = [1, ,2, , 3];
// console.log(arr1.length, arr1);
// console.log(arr2.length, arr2);
// console.log(arr3.length, arr3);

// const arr = new Array(3);
// console.log(arr);
// console.log(arr.length);

// console.log(arr[0], arr[1], arr[2]);

// const arr1 = new Array(1, 2, 3);
// const arr2 = new Array('ABC');
// const arr3 = new Array(true);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log(typeof arr3[0]);

// const test = new Array({});
// console.log(test);

// const arr1 = Array.of(true,null,[],{},'abc','123');
// console.log(arr1);

// const arr1 = new Array([1, 2, 3]);
// const arr2 = new Array('ABCD');
// const arr3 = new Array({
//   '1': true,
//   '2': false,
//   '3': null,
// })

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

const arrays = [
  [], [1, 2, 3], new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype // 배열임
];

const notArrays = [
  1, 'abc', true, null, {}
];

for (const item of arrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

for (const item of notArrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

console.log(Array.prototype);