// // let num = 2;
// // const arr = [1, 1, 1, 1, 1];
// // function test (a, b){
// //   a++;
// //   for(let i of b) {
// //     i++;
// //   }
// //   console.log(a, b);
// // }
// // test(num, arr);

// // const arr2 = [0, 0, 0];
// // const arr3 =[];
// // // arr2[0]++;
// // // console.log(arr2);

// // for(let i of arr2){
// //   arr3.push(i++);
  
// // }
// // console.log(arr2, arr3);

// let x = 1;
// let y = {
//   name: '홍길동',
//   age: 15
// }
// let z = [1, 2, 3];

// function changeValue (a, b, c) {
//   a++;
//   b.name = '전우치';
//   b.age++;
//   c[0]++;

//   console.log(a, b, c);
// } 

// changeValue(x, y, z);

// console.log(x, y, z);


// let b = 0;
// b++; //아직 0
// console.log(b); //1

// let x = 10;

// // 값을 반환부터 하고 증가
// console.log('1.', x++, x);

// // 값을 증가부터 하고 반환
// console.log('2.', ++x, x); //++x 자첵 증가됨

let x = 1;
let y = {
  name: '홍길동',
  age: 15
}
let z = [1, 2, 3];
const result = [];

function changeValue (a, b, c, d) {
  a++;
  b.name = '전우치';
  b.age++;
  for(let i of c) {
    i++;
    d.push(i);
  }

  console.log(a, b, c, d);
}

changeValue(x, y, z, result);
console.log(x, y, z, result);

// const arr = [0, 0, 0];

// for (let i of arr) {
//   i++;

// }

function abc (){
}
console.log(typeof abc);
console.log(abc instanceof Object);

const num = 1;
console.log(num instanceof Object);
const arr1 = [];
console.log(arr1 instanceof Object);
const obj = {};
console.log(obj instanceof Object);

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

function comb (a, b, c) {
  return (x, y) => c(b(a(x,y), y), y);
}
const answer = comb(add, sub, mul);
console.log(answer(10, 4));
