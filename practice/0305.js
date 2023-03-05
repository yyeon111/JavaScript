// const obj = {
//   x: 1,
//   y: 2,
//   z: 3
// };

// console.log(
//   Object.keys(obj),
// );
// console.log(
//   Object.entries(obj),
// );

const person = {
  fullName: '홍길동',
  ageInNumber: 25,
};

// 💡 value를 전우치로 바꾸면
Object.defineProperty(person, 'fullName', {
  value: '전우치'
});

console.log(person);

person['fullName'] = '홍길동';
console.log(person); // Object defineProperty설정 방법과 같다.

Object.defineProperty(person, 'fullName', {
  value : '미정'
});

console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, 'fullName',{
  enumerable: false
});
console.log(Object.getOwnPropertyDescriptors(person));

console.log(Object.keys(person));
for(const key in person){
  console.log(`${key} : ${person[key]}`)
}; //enumerable false 시

for(const i of Object.getOwnPropertyNames(person)){
  console.log(`${i} : ${person[i]}`);
}

// 여러 번 실행해 볼 것
const obj1 = new Object();
const obj2 = { x: 1, y: 2 };
const obj3 = { y: 3 };
const obj4 = { z: { a: 1 }}

obj5 = Object.assign(obj1, obj2, obj3, obj4);

console.log(Object.seal(obj5));
obj5.z.o = 2;
console.log(obj5); //얇은 복사만 가능


