// const iterable = {
//   [Symbol.iterator] () {
//     return {
//       next() {
//         return {value: , done: }
//       }
//     }
//   }
// }

// function* generator () {
//   yield vlaue
// }

// function iterable() {
//   let count = 0;
//   const maxCount = 10;
//   return {
//     [Symbol.iterator] () {
//       return this;
//     },
//     next () {
//       return {value: Math.ceil(Math.random() * 6), done: count++ >= maxCount}
//     }
//   }
// }

// function* generator() {
//   let count = 0;
//   const maxCount = 10;
//   // while (count++ <= maxCount) {
//     yield Math.ceil(Math.random() * 6)
//   // }
// }

// const result = generator()
// console.log([...result]);
// console.log([...result]); // []


function *generator() {
  yield 1;
  yield 2;
  yield 3;
}
const result = generator();
console.log([...result]);

function *generator2(){
  let count = 0;
  while (count++ <= 2){
    yield count;
  }
}
const result2 = generator2();
const [a, ...rest] = result2;
console.log(`첫번째는 ${a}, 두번째, 세번째는 ${rest.join(', ')} 입니다.`);