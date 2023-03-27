const obj = {
  x: 1,
  y: {
    a: 1,
    b: 2
  }
};

Object.freeze(obj);

obj.x = 2;
obj.y.b = 3;
console.log(obj);