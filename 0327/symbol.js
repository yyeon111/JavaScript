// const mySymbol = Symbol();

// console.log(typeof mySymbol, mySymbol);

// const symbol1 = Symbol('hello');
// const symbol2 = Symbol('hello');

// console.log(symbol1, symbol2);
// // 래퍼 객체(Symbol)의 인스턴스 프로퍼티
// console.log(symbol1.description, symbol2.description);

// const obj = {
//   [Symbol('x')]: 1,
//   [Symbol('y')]: 2
// }

// console.log(obj);
// // 유일무이한 값이므로 다음과 같이 출력 불가
// console.log(
//   obj[Symbol('x')],
//   obj[Symbol('y')]
// );

// const buildingKey = Symbol('secret');

// const building = {
//   name: '얄코사옥',
//   floors: 3,
//   [buildingKey]: '1234#'
// }

// console.log(building);

// const title = 'hello';

// const product = {
//   name: 'labtop',
//   [title]: 'hello'
// }

// console.log(product);
// console.log(product[title]);
// // 외부로부터의 접근 차단
// console.log(
//   building[Symbol('secret')]
// );

// for (key in building) {
//   console.log(key);
// }


// for (key in product) {
//   console.log(key);
// }


// console.log(
//   Object.keys(building),
//   Object.values(building),
//   Object.entries(building),
//   Object.getOwnPropertyNames(building)
// );

// const test = new Object();

// Object.defineProperty(test, 'name', {
//   value: '이름',
//   enumerable: false
// }
// )
// console.log(Object.getOwnPropertyDescriptors(test));
// console.log(Object.keys(test), Object.getOwnPropertyNames(test));

// Object.defineProperties(test, {
//   'age': {
//     value: '나이',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   'age': {
//     get (age) {
//       return this.age + '세 입니다.';
//     },
//     enumerable: false
//   }
// }
// )

// console.log(test);
// console.log(Object.keys(test));
// console.log(Object.getOwnPropertyDescriptors(test));
// console.log(Object.getOwnPropertyNames(test));

// console.log(
//   Object.getOwnPropertySymbols(building), //배열
//   Object.getOwnPropertySymbols(building)[0],
//   // Object.getOwnPropertyDescriptors(building)
// );
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
  [{x: 1}]: 'hi',
  [[1, 2, 3]] : 'number'
};
console.log(obj);
console.log(obj['[object Object]']);
console.log(obj['1,2,3']);
// console.log(obj[{'object Object'}]);

console.log(obj[{}]);
console.log(obj['']);

const test = {
  [Symbol('x')]: 1,
  [Symbol('x')]: 2
}
console.log(test);
console.log(test[Symbol('x')]);

const symbol3 = Symbol.for('hello');
const symbol4 = Symbol.for('hello');
console.log(symbol3 === symbol4);

const symbol5 = Symbol('hello');
console.log(symbol3 === symbol5);

console.log(Symbol.keyFor(symbol3));

const s = Symbol.for('hi');
const objobj = {
  [s]: 'hello',
  [Symbol.for('hi')]: 'hell'
};
console.log(objobj);
console.log(objobj[Symbol.for('hi')]);

const b = Symbol('b');
const sym = {
  [Symbol('a')]: 'a',
  [b]: b,
  ['f']: 'f',
  'g': 'g'

}
console.log(sym[Symbol('a')]);
console.log(sym[b]);
console.log(sym.b);
console.log(sym.f);
console.log(sym['g']);
console.log(sym.Symbol('a'));