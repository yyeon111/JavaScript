// // [[키 쌍]...] 배열로 생성 + 초기화
// const map2 = new Map([
//   ['x', 1],
//   [123, 'ABC'],
//   [true, { a: 1, b: 2 }],
// ]);

// console.log(map2);

// const map = new Map();
// map.set('x');
// console.log(map);
// console.log(map.has('x'));

// const set = new Set();
// set.add('x');
// console.log(set.has('x'));
// console.log(set);

// console.log(map2.get('x'));
// // console.log(Object.getOwnPropertyDescriptors(map2));

// map.set({x: 1, y: 2}, 3);
// console.log(map);
// console.log(map.has({x: 1, y: 2}));

// map.delete('x');
// console.log(map);

// console.log(map.size);

// for (const [key, value] of map2){
//   console.log(key, value);
// }// 배열

// console.log(map2.keys(), map2.values(), map2.entries());
// const newArr = [...map2]
// console.log(newArr);

// const [x, y] = map2;
// console.log(x, y);
// const [a, ...b] = map2; //배열안에 배열
// console.log(a);
// console.log(b);

// const set2 = new Set([1, 2, 3, 4, 5]);
// const [c, ...d] = set2;
// console.log(c);
// console.log(d);

// const obj = {js: 'javascript', ns: 'nodejs', java: 'java'};
// const {js, ...server} = obj;
// console.log(js);
// console.log(server);

// const arr = [
//   ['🐶', '강아지'],
//   ['🐱', '고양이'],
//   ['🐯', '호랑이'],
//   ['🐵', '원숭이'],
//   ['🐨', '코알라']
// ];
// const map3 = new Map(arr);
// for (const [key, value] of map3) {
//   console.log(key, value);
// }

// console.group();

// for(const [key, value] of arr) {
//   console.log(key, value);
// }

// arr.forEach(i => console.log(i));

const obj = {
  a: 1,
  b: '2',
  c: 3,
  d: true,
  e: false
}

// 1. key와 value 매개변수
const objStr1 = JSON.stringify(obj, (a, b) => {
  if (a && a < 'a' || a > 'c') {
    // 해당 프로퍼티 생략
    return undefined;
    // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
    // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
    // key와 value를 로그로 출력해보며 확인해 볼 것
  }
  if (typeof b === 'number') {
    return b * 10;
  }
  return b;
});
console.log(objStr1);

