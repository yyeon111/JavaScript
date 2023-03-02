// const arr = [1, 2, 3];
// const [x, y, z] = arr;

// console.log(x, y, z); //배열로 들어가는 게 아님 -> 묶어주는 것

// const arr = [1, 2, 3];
// const [x, y] = arr;
// console.log(x, y); //순서대로 일부만 가져오기 가능

// const arr = [1, 2, 3];
// const [a, b, c, d = 4, e = 5] = arr;
// console.log(a, b, c, d, e);

// const [f, g, h = 4] = arr; //기본값 있어도 할당이 덮어씀
// console.log(f, g, h);

const arr = [1, 2, 3, 4, 5];
const [...x] = arr;
// const [x, ...y] = arr;
console.log(x); //...으로 들어가면 나머지가 감싼걸로 들어감 -> 여기선 배열

const players = [
  {name: '순이', score: 91},
  {name: '정환', score: 65},
  {name: '윤수', score: 72},
  {name: '철웅', score: 88},
  {name: '지우', score: 98},
  {name: '세아', score: 40},
];

function logTop3 ([first, second, third]) {
console.log(
  `1등은 ${first}!! 2등과 3등은 ${second}, ${third} 입니다.`
  );
}

logTop3(
  [...players]
  .sort((a,b)=> b.score - a.scroe)
  .map(({name}) => name)
);
console.log(players);
// console.log([...players]);