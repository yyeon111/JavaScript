// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odds = arr.filter(i => i % 2);
// const evens = arr.filter(i => !(i % 2));
// const largerThan3 = arr.filter(i => i > 3);

// console.log(odds);
// console.log(evens);
// console.log(largerThan3);

// const arr = [
//   { name: '사과', cat: '과일', price: 3000 },
//   { name: '오이', cat: '채소', price: 1500 },
//   { name: '당근', cat: '채소', price: 2000 },
//   { name: '살구', cat: '과일', price: 2500 },
//   { name: '피망', cat: '채소', price: 3500 },
//   { name: '딸기', cat: '과일', price: 5000 }
// ];

// console.log(
//   '과일 목록:',
//   arr
//   .filter(i => i.cat === '과일')
//   .map(i => name)
//   .join(', ')
// );

// const arr = {x: 1, y: 2 };
// const {x, y} = arr;
// console.log(x, y);

const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

// console.log(
//   '과일 목록:',
//   arr
//   .map(({cat}) => cat === '과일')
//   .filter(({name}) => name)
//   .join(', ')
// );
arr
  console.log(arr.filter(({cat}) => cat === '과일').map(({name}) => name));