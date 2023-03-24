// let randomWord = 'DBKGICAHFEJ';


//   randomWord
//   .split('')
//   .sort()
//   // .reverse()
//   .join('')

// console.log(randomWord);


// const arr = ['F', 'E', 'I', 'A', 'H', 'C', 'D', 'J', 'G', 'B'];
// const num = [1, 2, 3, 4, 5]
// // console.log(
// //   arr.sort((a, b) => a > b ? 1 : -1)
// // );
// console.log(
//   num.sort((a, b) => a < b ? 1 : -1)
// );

//양수가 나오면 뒤집고, 음수가 나오면 그대로
//연산을 해야함.
const arr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

console.log(
  arr
  .sort((a, b) => {
    if (a.cat !== b.cat) {
      return a.cat > b.cat ? 1 : -1;
    }
    return a.price > b.price ? 1 : -1;
  })
  .map(({name, cat, price}, idx) => {
    return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
  })
  .join('\n - - - - - - - - - \n')
);