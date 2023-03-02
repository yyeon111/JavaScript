// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2);

// const arr1 = ['B', 'C'];
// const arr2 = ['D'];
// const arr3 = ['E'];

// const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F'];
// console.log(arr4);

// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// console.log(...arr1);
// console.log(
//   Math.min(...arr1),
//   Math.max(...arr1)
// );

// function classIntro (classNo, teacher, ...children) {
//   return `${classNo}반의 선생님은 ${teacher},`
//   + `학생들은 ${children.join(', ')}입니다.`
// }

// const classNo = 3;
// const teacher = '김민지';
// const students = ['영희', '철수', '보라', '돌준', '달숙'];

// console.log(
//   classIntro(classNo, teacher, ...students)
// );

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const toAdd = ['둘', '셋', '넷'];

// arr.splice(1, 3, ...toAdd);
// console.log(arr);

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; //얕은 복사
// console.log(arr1 === arr2); //false

// arr1[0] = 0;
// console.log(arr1, arr2); //각각이 다름

const arr1 = [{x: 1}, {x: 2}]; //깊은 복사는 되지 않음
const arr2 = [...arr1];

arr1[0].x = 0;
console.log(arr1, arr2);

let arr = [1, 2, 3];
arr = [...arr, 4];
arr = [0, ...arr];
console.log(arr); //push unshift 보다 가독성이 좋음.

let arr3 = [1, 2, 3];
arr3.push(4);
arr3.unshift(0);
console.log(arr3);

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];

const arr6 = arr4.concat(arr5);
const arr7 = [...arr4, ...arr5];

console.log(arr6, arr7);


const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr8 = [
  ...orgArr.slice(0, 3),
  ...orgArr.slice(6, 9)
];
console.log(arr8);

// 참고: 또 다른 방법
const arr9 = orgArr
.filter((_, i) => !(i >= 3 && i < 6));
console.log(arr9);
