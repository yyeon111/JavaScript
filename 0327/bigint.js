for (let i = 0; i < 100; i++) {
  console.log(Number.MAX_SAFE_INTEGER + i);
} //무작위 숫자

const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt('9007199254740991');
const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991

console.log(
  bigInt1 === bigInt2,
  bigInt2 === bigInt3,
  bigInt3 === bigInt4
);

console.log(typeof bigInt1);
for (let i = 0; i < 100; i++) {
  console.log(bigInt1 + BigInt(i));
} //n

console.log(
  1n === 1, // 타입은 다름
  1n == 1,
  1n < 2,
  1n >= 0,
  2n < 1
);

console.log(
  [4n, 7, 6n, 3, 1, 5, 9, 2n, 8n]
  .sort((a, b) => a > b ? 1 : -1)
);

console.log(
  !!(0n),
  !!(1n)
);

0n ? console.log('참') : console.log('거짓');
1n ? console.log('참') : console.log('거짓');

console.log(
  5n / 2n
);

// console.log(
//   Math.max(1n, 2n)
// );

console.log(
  Number(1n),
  Number(9007199254740993n)
);


function filter (a) {
  
  if(typeof a === 'bigint' || typeof a === 'string') {
    return Number(a);
  }
}

// console.log(typeof 4n);
// console.log(filter(4n))
console.log(Math.min(filter(4n), 2, false));

