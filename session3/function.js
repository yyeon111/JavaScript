// function isOddNum (number) {
//   console.log(
//     (number % 2 ? '홀' : '짝')
//     + '수입니다.'
//   );
//   return number % 2 ? true : false;
// };

// const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의
// console.log(checkIfOdd(23));

// let x = 7, y = 3;

// let func1 = (a, b) => a + b;
// let func2 = (a, b) => a - b;
// // console.log(func1(x, y), func2(x, y));

// func1 = func2
// console.log(func1(x, y), func2(x, y));


// let arithmetics = [
//   (a, b) => a + b,
//   (a, b) => a - b,
//   (a, b) => a * b,
//   (a, b) => a / b
// ];

// for (arm of arithmetics) {
//   console.log(arm(5, 3));
// }

// calculate
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

function calcAndEval (calc, eval, x, y) {
  return eval(calc(x, y));
}

console.log(
  calcAndEval(add, isOdd, 5, 7),
  calcAndEval(subtract, isPositive, 5, 7),
  calcAndEval(multiply, isOdd, 5, 7)
);
