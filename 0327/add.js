let x = 0b1010101010; // 682
let y = 0b1111100000; // 992
          // 0101001010

console.log((x^y).toString(2));

let z = 0b101; // 5

console.log(z.toString(2), x);

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
z = z << 1;
z = z << 1;
z = z << 1;
z = z << 1;
console.log(z.toString(2), z);

// 반복 실행해볼 것, 오른쪽 숫자를 늘려 볼 것
z = z >> 1;

console.log(z.toString(2), z);