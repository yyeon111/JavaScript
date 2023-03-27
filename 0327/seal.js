const obj = {
  x: 1,
  y: {
    a: 1,
    b: 2
  }
};

Object.seal(obj);

delete obj.x;
console.log(obj);

delete obj.y.a;
console.log(obj);

obj.y.c = 3;
console.log(obj);

console.log(Object.isSealed(obj));