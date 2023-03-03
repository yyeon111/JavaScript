const tempString = 'a';
const tempNumber = '1';
const obj = new Object();

const result = Object.assign(obj,tempString,tempNumber);
console.log(result);

const key = Object.keys(tempNumber);
console.log(key);

const obj1 = new Object();
const obj2 = { x: 1, y: 2 };
const obj3 = { y: 3 };
const obj4 = { z: { a: 1 }}

Object.assign(obj1, obj2, obj3, obj4);

console.log(obj1);