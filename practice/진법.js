console.log(
  parseInt(0b100,2)
);
//NaN //정수 인식 x

console.log(
  0b100.toString(2)
); //이상한 수 //순수 숫자만 가능

[
  0b1,
  0b10,
  0b11,
  0b100,
  0b101
].forEach(i => console.log(i))


console.log(0b10);
let x = 0b1010101010; // 682
let y = 0b1111100000; // 992 //0b는 표시 방법일 뿐
console.log(x);
console.log(y);
console.log(x.toString(2));
console.log(y.toString(2)); //0b표시없이 string만을 반환

let a = 0b101; // 5

console.log(x.toString(2), a);

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
b = a << 4; //오른쪽으로 숫자만큼 0늘어난다

console.log(b.toString(2), b);

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
c = a >> 1; //왼쪽으로 숫자만큼 줄어든다

console.log(c.toString(2), c);