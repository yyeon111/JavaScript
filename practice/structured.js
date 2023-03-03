const obj1 = {
  a: 1,
  b: 2,
  c: function () { return this.a + this.b },
  d: new Date(),
  e: Symbol('안녕'),
  // g: 1n // ⚠️ 오류 발생
}

const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1);
console.log(obj2);

const test = Symbol('안녕');
console.log(test);
console.log(typeof obj2.e); //undefined
console.log(obj2.d);