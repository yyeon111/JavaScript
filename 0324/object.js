// const arr = new Object([1, 2, 3]);
// console.log(arr, typeof arr); // [Array]object
// const num = new Object(1);
// console.log(num, typeof num); // [Number]object
// const bool = new Object(true);
// console.log(bool, typeof bool); // [Boolean]object

// const start = {
//   name: 'Nora',
//   age:22
// };

// const personal = {
//   hobby: 'dancing'
// }

// const school = {
//   major: 'English'
// }

// const person = Object.assign(start, personal, school);

// console.log(start);
// console.log(person);
// personal.hobby = 'Art';
// console.log(start); //연결x hobby: 'dancing'
// console.log(person); // 연결x hobby: 'dancing' 

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

// const obj1 = new Object();
// const obj2 = { x: 1, y: 2 };
// const obj3 = { y: 3 };
// const obj4 = { z: { a: 1 }}

// Object.assign(obj1, obj2, obj3, obj4);

// console.log(obj1);

const obj = {x: 1, y: 2, z: 3};

const key = Object.keys(obj);
console.log(key); // ['x', 'y', 'z']
obj.o = 4;
console.log(key); // ['x', 'y', 'z']
console.log(obj); // {x: 1, y: 2, z: 3, o: 4}
key.push('g');
console.log(key); // ['x', 'y', 'z', 'g']

const value = Object.values(obj);
console.log(value); // [1, 2, 3, 4]
obj.t = 5;
console.log(value); // [1, 2, 3, 4]
console.log(obj); // {x: 1, y: 2, z: 3, o: 4, t: 5}

const entries = Object.entries(obj);
console.log(entries); // [['x',1 ], ['y', 2], ['z', 3], ['o', 4], ['t', 5]]

// Object.preventExtensions(obj);
// obj.k = 6;
// console.log(obj);
// console.log(Object.isExtensible(obj));

// Object.seal(obj);
// delete obj.t;
// console.log(obj);
// console.log(Object.isSealed(obj));

// Object.freeze(obj);
// obj.x = 2;
// console.log(obj);
// console.log(Object.isSealed(obj));

// const obj5 = {x: 1, y: {z: 2}};
// Object.freeze(obj5);
// obj5.y.z = 3;
// console.log(obj5);
// console.log(Object.isFrozen(obj5));