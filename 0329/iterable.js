// const arr = [1, 2, 3, 4, 5];
// const arrIterator = arr[Symbol.iterator]();
// console.log(arrIterator);
// console.log(arrIterator.next);
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());

// const ten = {
//   [Symbol.iterator](){
//       let count = 0;
//       let maxCount = 10;
//     return {
//       next() {
//         return {
//           value: Math.ceil(Math.random()*6),
//           done: count++ >= maxCount
//         }
//       }
//     }
//   }
// }

// const spread = [...ten];
// console.log(spread);
// const [a, b, ...rest] = ten;
// console.log(`첫번 째는 ${a}, 두번째는 ${b}, 나머지의 합은
// ${rest.reduce((a,b) => a + b)} 입니다.`);
// const iterable = ten[Symbol.iterator]()
// for(let i = 0; i < 10; i++) {
//   console.log(iterable.next().value);
// }

// for(const item of ten) {
//   console.log(item);
// }

//함수사용

// function fiboIterator () {
//   let count = 0;
//   const maxCount = 10;
//   let [x, y] = [0, 1];
//   return {
//     next () {
//       [x, y] = [y, x + y];
//       return {
//         value: y,
//         done: count++ >= maxCount
//       }
//     }
//   }
// }
// const fibonacci = {
//   [Symbol.iterator]: fiboIterator
// }

// // for(const num of fibonacci) {
// //   console.log(num);
// // }
// const iterable = fibonacci[Symbol.iterator]();

// for(let i = 0; i <= 10; i++ ) {
//   console.log(iterable.next().value);
// }

// function fiboIterator(maxCount) {
//   return {
//     [Symbol.iterator] () {

//       let count = 0;
//       let [x, y] = [0, 1];

//       return {
//         next() {
//           [x, y] = [y, x + y];
//           return {
//             value: y,
//             done: count++ >= maxCount
//           }
//         }
//       }
//     }
//   }
// }

// const fiboMax5 = fiboIterator(5);
// for(itm of fiboMax5){
//   console.log(itm);
// }
// console.log([...fiboMax5]);