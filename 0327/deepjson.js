//json-> parse

const obj1 = {
  a: 1,
  b: 2,
  c: function () { return this.a + this.b }, //undefined
  d: new Date(),
  e: Symbol('안녕'), //undefined
  f: Infinity,
  g: NaN
  // g: 1n // ⚠️ 오류 발생
}

const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1);
console.log(obj2);

const func1 = (a, b) => a + b;
function func2 () { console.log('HELLO'); }

const func1Str = JSON.stringify(func1);
const func2Str = JSON.stringify(func2);

console.log(func1Str);
console.log(func2Str);

const obj4 = {
  a: 1,
  b: 2,
  // c: function () { return this.a + this.b },
  d: new Date(),
  // e: Symbol('안녕'),
  g: 1n,
  h: Infinity,
  i: NaN
  
}

const obj5 = structuredClone(obj4);

console.log(obj4);
console.log(obj5);

