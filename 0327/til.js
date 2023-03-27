// const password = Symbol('secret');

// const obj = {
//   email: 'abcd@aaa.com',
//   [password]: 123,
// }

// console.log(obj); // { email: 'abcd@aaa.com', [Symbol(secret)]: 123 }
// console.log(obj[Symbol['secret']]); //undefined

// const obj = {
//   user: 'abcd',
//   [Symbol('passowrd')]: 123,
// }

// // console.log(obj); // { user: 'abcd', [Symbol(passowrd)]: 123 }
// // console.log(obj[Symbol('password')]); // undefined

// const user1 = Symbol('password');
// const user2 = Symbol('password');
// console.log(user1 === user2); // false

// for(let itm in obj){
//   console.log(itm);
// }

// // console.log(Object.entries());
// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(Object.getOwnPropertyNames(obj));

const password = Symbol.for('password');
const user = Symbol.for('password');

console.log(password === user); // true

const obj = {
  [user]: 'name'
};

console.log(
  obj[Symbol.for('password')]
);

// console.log(Symbol.keyFor(user)); //password
// console.log(Symbol.keyFor(Symbol.for())); // undefind
// console.log(Symbol.keyFor(anonymous)); // error