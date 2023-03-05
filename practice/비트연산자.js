//계산이 아니라 위치에 따라 값 재정의

// let x = 0b1010101010; // 682 0101010101
// let y = 0b1111100000; // 992
// console.log(x, y); //표시방법 !== 실제 숫자가 담김
// // 양쪽 모두 1인 자리에 1
// const bitAnd = x & y; //10진법으로 바로 나타냄

// console.log(bitAnd); //672
// console.log(
//   bitAnd.toString(2)
// );

// // 한 쪽이라도 1인 자리에 1
// const bitOr = x | y

// console.log(bitOr); //1002
// console.log(
//   bitOr.toString(2)
// );

// // 양쪽이 다른 자리에 1
// const bitXor = x ^ y; //엑설

// console.log(bitXor);
// console.log(
//   bitXor.toString(2)
// );//같으면 0 다르면 1 앞에 0이 오면 생략.

// // 각 비트 반전
// console.log(~x);
// console.log(
//   (~x).toString(2)
// );

// // console.log(~y);
// console.log(
//   (~y).toString(2)
// );

let x = 0b101; // 5

console.log(x.toString(2), x);  //101, 5

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
x = x << 2; //오른쪽으로 비트를 늘림  

console.log(x.toString(2), x);

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
x = x >> 5;

console.log(x.toString(2), x);