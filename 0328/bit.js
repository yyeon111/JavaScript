const test = 0b1101; //13
console.log(test);

const changed = ~test;
const result = changed.toString(2);
console.log(result);

console.log(0b00000000000000000000000000001001);
console.log(0b0111);

let x = 0b1010101010; // 682
let y = 0b1111100000; // 992
// 각 비트 반전
console.log(~x);
console.log(
  (~x).toString(2)
);