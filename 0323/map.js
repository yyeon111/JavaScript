// const orgArr = [1, 2, 3, 4, 5];

// // ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
// const arr1 = orgArr.map((i, idx, arr ) => {
//   arr[idx]++; //실제값에 접근
//   console.log(i);
//   return i+1; //참고하는 것
//   }
// );
// console.log(orgArr);
// console.log(arr1);

// // const orgArr = [1, 2, 3, 4, 5];

// // // ⭐️ 각 콜백함수는 어떤 값을 반환해야 함
// // const arr1 = orgArr.map(i => i + 1);
// // const arr2 = orgArr.map(i => i * i);
// // const arr3 = orgArr.map(i => i % 2 ? '홀수' : '짝수');
// // console.log(arr1);
// // console.log(arr2);
// // console.log(arr3);

// const arrr = [1, 2, 3, 4];
// const result = arrr.forEach((i, idx, arr) => {
//     arr[idx]++;
//     return i + 1;
//   }
// )
// console.log(arrr, result);

const orgArr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 2500 },
  { name: '딸기', cat: '과일', price: 5000 }
];


const arr1 = orgArr.map(itm => {
  // 💡 블록 안에서는 return 문 필요함
  return {
    name: itm.name,
    cat: itm.cat
  }
});

console.log(arr1);

// 디스트럭쳐링 사용 (편의에 따라 적절히)
const arr2 = orgArr.map(({name, cat}) => {
  return { name, cat } //ES6
});

console.log(arr2);

const arr3 = { name: '사과', cat: '과일', price: 3000 };
const {name, cat} = arr3;
console.log(name, cat);

const x = 1;
const y = 2;
function fruits (x,y) {
  return {x, y};
}

const test = fruits(x, y);
console.log(test);

const joined = orgArr
.map(({name, cat, price}, idx) => {
  return `${idx + 1}: [${cat[0]}] ${name}: ${price}원`
})
.join('\n - - - - - - - - - \n');

console.log(joined);