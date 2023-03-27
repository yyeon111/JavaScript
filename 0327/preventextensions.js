const obj = {
  x: 1,
  y: 2
};

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));

obj.y.a = 3;
console.log(obj);
obj.z = 4;
console.log(obj);