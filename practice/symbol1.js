// const test  = Symbol('hi');

// const obj = {
//   [test]: 1
// };

// console.log(obj[test]); //주소가 저장되는 것이기 때문에 접근 가능

// const obj2 = {
//   [Symbol('x')] : 1
// };
// console.log(obj2[Symbol('x')]);

// const buildingKey = Symbol('secret'); //유저에게 보이는 값 secret

// const building = {
//   name: '얄코사옥',
//   floors: 3,
//   [buildingKey]: '1234#' //buildingKey를 모르기 때문에 값을 가져갈 수 없다.
// }

// console.log(building);

// console.log(
//   building.name,
//   building.floors,
//   building[buildingKey] //유저가 모름
// );
// // 외부로부터의 접근 차단
// console.log(
//   building[Symbol('secret')]
// );

// for (key in building) {
//   console.log(key);
// }

// console.log(
//   Object.keys(building),
//   Object.values(building),
//   Object.entries(building),
//   Object.getOwnPropertyNames(building)
// );

// console.log(
//   Object.getOwnPropertySymbols(building),
//   Object.getOwnPropertySymbols(building)[0],
// );

// const toString = Object.getOwnPropertySymbols(building)[0];
// console.log(typeof toString);
// console.log(
//   building[
//     Object.getOwnPropertySymbols(building)[0]
//   ]
// );

// 전역 심볼 레지스트리에 해당 키로 등록된 키가 없을 시:
// 심볼을 새로 생성
const symbol1 = Symbol.for('hello');

// 전역 심볼 레지스트리에 해당 키가 존재할 시:
// 해당 심볼을 반환
const symbol2 = Symbol.for('hello');

console.log(symbol1 === symbol2);
const obj = {
  [symbol1]: 'SECRET STRING'
}

console.log(obj);
console.log(
  obj[Symbol.for('hello')] //symbol(hello)로 유저에게 보임
);
console.log(
  obj[symbol1]
);
console.log(
  obj[Symbol('hello')]
);

console.log(
  Symbol.keyFor(symbol1), //symbol안의 값 
  Symbol.keyFor(symbol2)
);

// 숫자 요소들의 평균을 구하는 메서드 추가
Array.prototype[Symbol.for('average')] = function () {
  let sum = 0, count = 0;
  for (const i of this) {
    if (typeof i !== 'number') continue;
    count++;
    sum += i;
  }
  return sum/count
}
[1, 2, 3, 4, 5, 6][Symbol.for('average')]();