const str = 'hello';
const num = 1;
const arr = [];
const obj = {};

console.log('==============typeof================')
console.log(typeof str);
console.log(typeof num);
console.log(typeof arr);
console.log(typeof obj);

console.log('==============instanceof Object================')
console.log(str instanceof Object);
console.log(num instanceof Object);
console.log(arr instanceof Object); //true
console.log(obj instanceof Object); //true

console.log('==============instacneof typeof================')
console.log(str instanceof String);
console.log(num instanceof Number);
console.log(arr instanceof Array); //true
console.log(obj instanceof Object); //true