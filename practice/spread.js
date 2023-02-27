//spread 연산자

// const class1 ={
//   x: 1, y: 'A', Z: true
// };

// const class2 = {...class1}; //copy by refernence아님,
// //정보 그대로 가져와서 펼치다. 

// console.log(class2);

// const class1 = {
//   a: 1, b: 'A', c: true
// };
// const class2 = {
//   d: {x: 10, y: 100}, e: [1, 2, 3]
// };
// const class3 = {
//   ...class1, z: 0
// }
// const class4 = {
//   ...class2, ...class3, ...class2.d
// }
// console.log(class3);
// console.log(class4); //객체 배열 다 가능 복제
// //프로퍼티 접근 해서 안에 있는 내용도 가져 올 수 있다.

// //중복되는 프로퍼티는 뒤의 것이 덮어씀
// const test1 = {
//   ...{ a: 1, b: 2},
//   ...{ b: 3, c: 4, d: 5 },
//   ...{c: 6, d: 7, e: 8}
// }
// console.log(test1);

//얕게 복사
const class1 = {
  x: 1,
  y: {a: 2},
  z: [3, 4]
};

const class2 = { ...class1 };
class1.x++;
class1.y.a++;
class1.z[0]++;

console.log(class1); //얕게 복사는 가능하지만 깊게 복사는 불가능능
console.log(class2);
