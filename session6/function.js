// const arr = [1,2,3,4,5];
// const result = arr.forEach(itm => console.log(itm)); 

// console.log('반환값',result); //undefined arraw function 이여도 retrun 값 저장X, 순회 기능만 한다.

// arr.forEach(console.log); // element, index, array

// const arr = [10,20,30,40,50];

// arr.forEach((itm,idx)=>console.log(itm,idx));

// const logWithIndex = (itm,idx) => {
//   console.log(`[${idx}]: ${itm}`);
// }
// arr.forEach(logWithIndex);

// const arr = [1,2,3,4,5];
// arr.forEach((itm,idx,arr) => {
//   arr[idx]++; //위치 알아내서 원본 배열 변경
//   console.log(itm); //기존 값만 알고 있음
// });

// console.log(arr); //변경한 배열 나타냄
//원본 배열 변경 시킬 수 있다.

//새로운 배열을 반환한다.
//콜백 함수는 값을 꼭 반환해야 한다.
// const orgArr = [1,2,3,4,5];

// const arr1 = orgArr.map(i => i+1);
// const arr2 = orgArr.map(i => i*1);
// const arr3 = orgArr.map(i => i%2 ? '홀수' : '짝수');

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// const orgArr = [
//   {name: '사과', cat: '과일', price:3000},
//   {name: '오이', cat: '채소', price:1500},
//   {name: '당근', cat: '채소', price:2000},
//   {name: '살구', cat: '과일', price:2500},
//   {name: '피망', cat: '채소', price:2500},
//   {name: '딸기', cat: '과일', price:5000}
// ];

// const arr1 = orgArr.map(itm => {
//   return{
//     name: itm.name,
//     cat: itm.cat
//   }
// });

// console.log(arr1);

// //디스트럭처링
// const arr2 = orgArr.map(({name})=>{
//   return name //name만 들어갈 경우 key의 value을 가져온다. {name}은 name의 key와 value를 가져온다.
// });

// console.log(arr2);

// //디스트럭처링 property의 값이 불림
// //map은 원소를 도는 것이기 때문에 [0] 인덱스 밖에 없다.
// const joined = orgArr
//   .map(({name, cat, price}, idx) => {
//     return `${idx+1}: [${cat[0]}] ${name}: ${price}원`
//   })
//   .join('\n - - - - - - - - - - \n');

  // console.log(joined);

  // const arr = [1,2,'삼', 4, 5, 6, '칠', 8, 9];

  // const isString = i => typeof i ==='string';
  // const isBoolean = i => typeof i === 'boolean';

  // console.log(
  //   arr.find(isString),
  //   arr.findLast(isString),
  //   arr.findIndex(isString),
  //   arr.findLastIndex(isString)
  // );

  // const result = arr.find(i=>typeof i === 'string');
  // console.log(result);

  // console.log(
  //   arr.find(i=>typeof i==='boolean')
  // ); //없을시에는 undefined
  // console.log(
  //   arr.findLast(i=>typeof i==='boolean')
  // );
  // console.log(
  //   arr.findIndex(i=>typeof i === 'boolean')
  // );
  // console.log(
  //   arr.findLastIndex(i=>typeof i === 'boolean')
  // ); //찾는 인덱스가 없을 시에는 -1반환

  // const arr = [1,2,3,4,5,6,7,8,9];

  // console.log(
  //   arr.some(i=>i%2), //어떤건 홀 어떤건 짝
  //   arr.every(i=>i%2) //전부 홀이거나 짝이지 않다. false
  // );

  // console.log(
  //   arr.some(i=>i<0), //어떤것도 0보다 작지 않다.
  //   arr.every(i=>i<10) //전부 10보다 작다.
  // );

  // const arr = [
  //   {name: '사과', cat: '과일', price: 3000},
  //   {name: '사과', cat: '과일', price: 3000},
  //   {name: '사과', cat: '과일', price: 3000},
  //   {name: '사과', cat: '과일', price: 3000},
  //   {name: '사과', cat: '과일', price: 3000},
  //   {name: '사과', cat: '과일', price: 3000},
  // ];

  // const isCheapVega = i =>{ //함수실행으로 
  //   return i.cat === '채소' && i.price <2000;
  // }
  // const isPlant = ({cat}) => {
  //   return ['과일','채소'].includes(cat);
  // }

  // console.log(
  //   arr.some(isCheapVega),
  //   arr.every(isCheapVega),
  //   arr.some(isPlant),
  //   arr.every(isPlant)
  // );

  // const arr = [1,2,3,4,5,6,7,8,9];

  // const odds = arr.filter(i=>i%2);
  // const evens = arr.filter(i=>!(i%2));
  // const largerThan3 = arr.filter(i => i>3);

  // console.log(odds);
  // console.log(evens);
  // console.log(largerThan3);

  const arr = [
    { name: '사과', cat: '과일', price: 3000 },
    { name: '오이', cat: '채소', price: 1500 },
    { name: '당근', cat: '채소', price: 2000 },
    { name: '살구', cat: '과일', price: 2500 },
    { name: '피망', cat: '채소', price: 3500 },
    { name: '딸기', cat: '과일', price: 5000 }
  ];
  
  console.log(
    '과일 목록:',
    arr
    .filter(({cat}) => cat === '과일')
    .map(({name}) => name)
    .join(', ')
  );