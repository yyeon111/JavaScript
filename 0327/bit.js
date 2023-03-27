let x = 0b1010101010; // 682
let y = 0b1111100000; // 992

// 양쪽 모두 1인 자리에 1
const bitAnd = x & y;

console.log(bitAnd);
console.log(
  bitAnd.toString(2)
);

// 한 쪽이라도 1인 자리에 1
const bitOr = x | y

console.log(bitOr);
console.log(
  bitOr.toString(2)
);

// 양쪽이 다른 자리에 1
const bitXor = x ^ y;

console.log(bitXor);
console.log(
  bitXor.toString(2)
);

// 각 비트 반전
console.log(~x);
console.log(
  (~x).toString(2)
);

console.log(-0b1010101010.toString(2));
console.log(~ 0b1010101010.toString(2));

console.log(~y);
console.log(
  (~y).toString(2)
);

console.log(-0b1111100000.toString(2));

console.log((~parseInt(1111100000,2)).toString(2));
//정수로 바로 반환

const num = 10;
console.log(~num); // -11
console.log(num.toString(2));
console.log(~num.toString(2));

const a = 5;
console.log(a.toString(2));
console.log(~a.toString(2));
const two = 101;
console.log(two);
console.log(~101);