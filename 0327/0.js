
[
  0b1,
  0b10,
  0b11,
  0b100,
  0b101
].forEach(i => console.log(i))



console.log(typeof 0b10);


console.log(typeof 0b101.toString(10));

console.log(0o7);
console.log(0x9);

const num = 10;

const ten = num.toString(2);
console.log(parseInt(ten, 2));

const temp = 0b101.toString(10);
console.log(typeof +(temp));