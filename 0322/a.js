console.log(
  Array.isArray([1, 2, 3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
);

const arrays = [
  [], [1, 2, 3], new Array(),
  // ⚠️ instanceof에서는 결과가 다름
  Array.prototype // 배열임 만들어 져 있는 것 
];

const notArrays = [
  1, 'abc', true, null, {}
];

for (const item of arrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

for (const item of notArrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

// const arr = [
//   '한놈', '두시기', '석삼', '너구리', '오징어'
// ];

// console.log(
// //   arr.at(1), arr.at(2)
// );

// const arr = [1, 2, 3, 'abc', true];

// console.log(
//   arr.includes(2),
//   arr.includes('abc'),
//   arr.includes(true),
// );

// const obj1 = { x: 1, y: 2 };
// const obj2 = { x: 1, y: 2 };

// const arr = [
//   obj1,
//   { x: 3, y: 4 }
// ];

// console.log(
//   arr.includes(obj1),
//   arr.includes(obj2),
//   arr.includes({ x: 1, y: 2 }),
//   arr.includes({ x: 3, y: 4 })
// );

// const arr = [1, 2, 3, 2, 1];

// console.log(
//   arr.indexOf(2),
//   arr.lastIndexOf(2),
//   arr.indexOf(4)
// );

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
]; //string

console.log(
  typeof arr1.join() // 인자가 없다면 쉼표`,`로
);
console.log(
  arr1.join('')
);
console.log(
  arr1.join(' ')
);
console.log(
  arr2.join(':')
);

console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {

  // [ 4-3강 예제 ]

  // let childrenStr = '';
  // for (const child of children) {
  //   if (childrenStr) childrenStr += ', ';
  //   childrenStr += child;
  // }
  // return `${classNo}반의 선생님은 ${teacher}, `
  //   + `학생들은 ${childrenStr}입니다.`
  console.log(Array.isArray(arguments));
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
  
}