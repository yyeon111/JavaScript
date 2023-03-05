[
  0b1,
  0b10,
  0b11,
  0b100,
  0b101
].forEach(i=>console.log(i)); //2진법 으로 표기하면 10진법으로 알려준다. binary 1,0이외의 숫자 -> 토큰으로 인식 오류

console.log('\n');
//octal(악틀)
[
  0o7,
  0o10,
  0o100,
  0o1000
].forEach(i=>console.log(i)); //10진수를 8진수로 표현 법 -> 7이상의 숫자 -> 토큰으로 인식 오류

console.log(
  (512).toString(8)
); //10진수 숫자를 8진수로 변환했을 때 결과값

console.log(
  parseInt(1000,8)
); //1000을 8진수로 표현한 것을 10진수로 변환 했을 때 결과값

//hexadecimal 16진법 헥사데시믈 0-9, A-F 대소문자 상관x
[
  typeof 0x9,
  0xA,
  0xB,
  0xC,
  0xD,
  0xe,
  0xf,
  0x10,
  0xFFFFFF,
].forEach(i=>console.log(i)) //number

//진법간의 변환
const num = 123456789;

const binStr = num.toString(2);
const octStr = num.toString(8);
const hexStr = num.toString(16);

console.log(binStr, octStr, hexStr); //toString, bigInt는 2,8,16말고 2~36사이 진법 변환 가능
console.log(
  parseInt(binStr, 2),
  parseInt(octStr, 8),
  parseInt(hexStr, 16)
);

// 💡 상호변환
console.log(
  parseInt(hexStr, 16).toString(2),
  parseInt(binStr, 2).toString(8),
  parseInt(octStr, 8).toString(16)
);