// for(let i = 0; i <100; i++){
//   console.log(typeof Number.MAX_SAFE_INTEGER+i);
// }
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

//숫자 뒤에 n붙임
//BIGINT()타입
//진법을 넣어도 가능
const bigInt1 = 9007199254740991n; // 끝에 n을 붙임
const bigInt2 = BigInt(9007199254740991);
const bigInt3 = BigInt('9007199254740991'); //문자도 인식
const bigInt4 = BigInt(0x1fffffffffffff) // 9007199254740991

console.log(
  bigInt1 === bigInt2,
  bigInt2 === bigInt3,
  bigInt3 === bigInt4
);

console.log(typeof bigInt1); //n 붙으면 bigint 자료형이 된다.
for (let i = 0; i < 100; i++) {
  console.log(bigInt1 + BigInt(i)); //MAX_SAFE_INTEGER 보다 큰 수 담으려면 bigint로 하면 가능
}

//number와 산술 불가능 
// console.log(
//   1n + 1
// ); //오류
console.log(
  1n + 1n
);

// 양쪽 모두 BigInt로 변환하여 계산하는 방법 사용
const calcAsBigInt = (x, y, op) => {
  return op(BigInt(x), BigInt(y));
}

console.log(
  calcAsBigInt(1n, 1, (x, y) => x + y)
);

//비교 연산 가능 
//타입은 다르지만 숫자끼리의 비교는 가능하다.
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

// console.log(
//   [4n, 7, 6n, 3, 1, 5, 9, 2n, 8n]
//   .sort((a, b) => b-a)
// ); sort 공부 필요

console.log(
  !!(0n),
  !!(1n)
);

0n ? console.log('참') : console.log('거짓');
1n ? console.log('참') : console.log('거짓');

//BigInt끼리의 연산 에서 소수점 아래는 버림
console.log(
  5n / 2n
);

console.log(
  Number(5n / 2n)
);

console.log(typeof Number(5n/2n))

//Math의 정적 메서드 사용 불가
// console.log(
//   Math.abs(1n)
// );

// console.log(
//   Math.max(1n,2n)
// ); 오류

//BigInt 를 Number로 변환 가능하지만 정확성 유실 될 수 있다.
console.log(
  Number(1n),
  Number(9007199254740993n) //정확성 유실
);