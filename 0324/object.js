// const obj = new Object([1, 2, 3]);
// console.log(obj, typeof obj);
// const num = new Object(1);
// console.log(num, typeof num);
// const bool = new Object(true);
// console.log(bool, typeof bool); //

// const person1 = {
//   name: 'Nora',
//   age:22
// };

// const personal = {
//   hobby: 'dancing'
// }

// const school = {
//   major: 'English'
// }

// const person4 = Object.assign(person1, personal, school);
// console.log(person1);
// console.log(person4);
// personal.hobby = 'Art';
// console.log(person1);
// console.log(person4);

// const intro1 = {
//   name: '홍길동'
// };
// const intro2 = { ...intro1 };

// console.log(intro1, intro2);

// const personal = {
//   age: 25,
//   married: false
// };
// const career = {
//   job: '개발자',
//   position: '과장'
// }
// const test = Object.assign(intro1, personal, career);
// console.log(intro1, test);
// career.position = '팀장';
// console.log(intro1, test);

const obj1 = new Object();
const obj2 = { x: 1, y: 2 };
const obj3 = { y: 3 };
const obj4 = { z: { a: 1 }}

Object.assign(obj1, obj2, obj3, obj4);

console.log(obj1);

const obj = {x: 1, y: 2, z: 3};

const key = Object.keys(obj);
console.log(key); //시점의 키
obj.o = 4;
console.log(key);
console.log(obj);
key.push('g');
console.log(key);

const value = Object.values(obj);
console.log(value);
obj.t = 5;
console.log(value);
console.log(obj);

const entries = Object.entries(obj);
console.log(entries);

Object.preventExtensions(obj);
obj.k = 6;
console.log(obj);
console.log(Object.isExtensible(obj));

Object.seal(obj);
delete obj.t;
console.log(obj);
console.log(Object.isSealed(obj));

Object.freeze(obj);
obj.x = 2;
console.log(obj);
console.log(Object.isSealed(obj));

const obj5 = {x: 1, y: {z: 2}};
Object.freeze(obj5);
obj5.y.z = 3;
console.log(obj5);
console.log(Object.isFrozen(obj5));