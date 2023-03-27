// const num = 00000000000000000000000000000101;

// console.log(num.toString(2));

// const two = parseInt(1110,32);
// console.log(~two);

//2의보수
//음수 표현 안됨. ~는 음수표현

//0001 -> 1
//1110 -> -1
//치환 후 1을 더한다.

let x = 0b1010101010; // 682
let y = 0b1111100000; // 992
// 각 비트 반전
console.log(~x);
console.log(
  (~x).toString(2)
);
console.log(parseInt(-1010101011,2));
//반전 했을 때 0이면 양, 1이면 음수 -가 됨 양수가 없기 때문에 +1을 해서 양수로 만들어줘야함

console.log((4).toString(2));
console.log((-4).toString(2));

const four = Number((4).toString(2));
const f = Number((-4).toString(2));
console.log(four+f);