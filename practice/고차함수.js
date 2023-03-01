//인자 3개. 요소, 인덱스, array
//forEach 각 요소를 인자로 콜백함수 실행.

// const arr = [1, 2, 3, 4, 5];
// const result = arr.forEach(i => console.log(i));
// //다른 일을 하는 행위 하지 말것.
// //원본 변경
// //arrow function 이여도 return이 되지 않고 undefined로 남아 있는다.
// //for문 대체
// const arr1 = [1, 2, 3, 4, 5];

// arr1.forEach((itm, idx, arr) => {
//   arr[idx]++;
//   console.log(itm);
// });
// console.log(arr1); //원본 변경

//map => 얇은 복사
//3개 인자를 받음
// 콜백함수로 처리해 새 배열 반환
const orgArr = [1, 2, 3, 4, 5];
const arr1 = orgArr.map(i => i + 1);
const arr2 = orgArr.map(i => i * 1);
const arr3 = orgArr.map(i => i % 2 ? '홀수' : '짝수');
//별도 함수 선언을 하지 않고 고차함수에 바로 콜백함수를 전달받아 실행하는 원리

console.log(arr1);
console.log(arr2);
console.log(arr3);

const orgArr1 = [
  {name: '사과', cat: '과일', price: 3000},
  {name: '오이', cat: '채소', price: 1500},
  {name: '당근', cat: '채소', price: 2000},
  {name: '살구', cat: '과일', price: 2500},
  {name: '피망', cat: '채소', price: 2500},
  {name: '딸기', cat: '과일', price: 5000}
];

//매핑을 통해 요소의 property에 접근 가능
const arr4 = orgArr1.map(itm =>{
  return {
    name: itm.name,
    cat: itm.cat
  } 
});

console.log(arr4); 
console.log(orgArr1); //고차함수 실행 시 원본 변화 없음

const arr5 = orgArr1.map(({name, cat}) => {
  return {name, cat}
});

console.log(arr5);