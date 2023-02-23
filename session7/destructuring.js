//비구조화
//배열로 묶어서 각 변수에 할당

// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x,y,z);

// const arr = [1, 2, 3];
// const [x, y] = arr;
// console.log(x, y);

//기본값 설정 가능
// const arr = [1, 2, 3];
// const [a, b, c, d = 4, e = 5] = arr;
// console.log(a, b, c, d, e);

// const [f, g, h = 4] = arr;
// console.log(f, g, h); //기본값 보다 할당이 우선이다.
// //기본값이 있더라도 배열에 할당이 있으면 할당이 우선.

// const player = [
//   { name: '순이', score: 91 },
//   { name: '정환', score: 65 },
//   { name: '윤수', score: 72 },
//   { name: '철웅', score: 88 },
//   { name: '지우', score: 98 },
//   { name: '세아', score: 40 },
// ];
//배열 3개 순서로 가져온다.
//점수 높은 것 부터 순서 정렬 필요
// function logTop3 ([first, second, third]){
//   console.log(
//     `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
//   );
// }

// logTop3(
//   [...player]
//   .sort((a,b) => b.score - a.score)
//   .map(({name})=>name) //name?
// );
// console.log(player);

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a,b);

let a = 0;
let b = 1;

for(let i = 0; i < 10; i++){
  [a, b] = [b, a +b]; // [1, 1] [1, 2] [2, 3] [3, 5] ...
  console.log(b);  // [1] [2] [3] [5]
}

//피보나치 수열 만들어보기!
//앞에 두 수를 더하면 다음수가 나온다는 규칙이 있다.
//공식   두번째 인수 + 위결과  = 결과(피보나치 수열 결과) 