// const arr = [1, 2, '삼', 4, 5, 6, '칠', 8, 9];

// const isString = i => typeof i === 'string';
// const isBoolean = i => typeof i === 'boolean';

// console.log(
//   typeof arr.find(isString),
//   typeof arr.findLast(isString),
//   typeof arr.findIndex(isString),
// //   typeof arr.findLastIndex(isString)
// );

//카테고리가 채소인 것의 첫번 째 이름
//카테고리가 과일이면서 가격이 3000미만인 것의 마지막 이름을 찾기
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

// const first = arr.find(({cat}) => cat === '채소').name;
const first = arr.find(i => i.cat === '채소').name;
console.log(first);
const last = arr.findLast(i => i.cat === '과일' && i.price < 3000).name;
console.log(last);

const test = arr.map(({cat}) => {cat})
console.log(test);
// const {cat} = arr;
// console.log(cat);