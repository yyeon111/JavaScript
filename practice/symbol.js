// //Symbol생성 방법
// const mySymbol = Symbol();

// console.log(typeof mySymbol, mySymbol);

// const symbol1 = Symbol('hello');
// const symbol2 = Symbol('hello');

// console.log(symbol1, symbol2);
// // 래퍼 객체(Symbol)의 인스턴스 프로퍼티
// console.log(typeof symbol1.description, symbol2.description); //값만 string hello
// // 래퍼 객체(Symbol)의 인스턴스 메서드
// console.log(typeof symbol1.toString(), symbol2.toString()); //형식을 Symbol(hello) string으로 표시

// // ⭐️ 두 심볼은 같지 않다!
// console.log(symbol1 === symbol2); //유일무이

// //객체의 키로 사용된다.
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

// obj[Symbol('x')] = 2;
// console.log(obj[Symbol('x')], obj); // 변경도 불가 추가됨, 객체의 전체 값은 볼 수 있음 개인 키에 접근 불가능


// const buildingKey = Symbol('secret');

// const building = {
//   name: '얄코사옥',
//   floors: 3,
//   [buildingKey]: '1234#'
// }

// console.log(building);
// console.log(building[buildingKey]); // user에게는 들어간 키 내용이 보이기 때문에, 프로퍼티 키로써 접근이 불가능하다.
// console.log(building[Symbol('secret')]); //undefined =>  유저가 보이는  key 

// //접근 불가능 아무것도 안뜸
// for (key in building) {
//   console.log(key);
// }

// console.log(
//   Object.keys(building),
//   Object.values(building),
//   Object.entries(building),
//   Object.getOwnPropertyNames(building)
// );

// //심볼의 이름만 알 수는 있다. 할당된 key는 알 수 없음
//프로퍼티 적ㅂ근 제한할 프로퍼티 키로써 활용
// console.log(
//   Object.getOwnPropertySymbols(building),
//   Object.getOwnPropertySymbols(building)[0],
// );

//Symbor.for() 전역 심볼 레지스트리에 저장해서 같은 심볼을 생성할 때 찾아서 반환.
// const symbol1 = Symbol.for('hello');

// const symbol2 = Symbol.for('hello');

// console.log(symbol1 === symbol2); //같은 symbol가져옴 true

// const test1 = Symbol('hello');
// const test2 = Symbol('hello');
// console.log(test1===test2); //false


// console.log(
//   Symbol.keyFor(symbol1), //hello
//   Symbol.keyFor(symbol2)
); //저장된 심볼의 키 반환

//전역레지스트리에 저장되지 않은 심볼은 작동하지 않음
// ⚠️ 전역 심볼 레지스트리에 저장되지 않은 심볼에는 작동하지 않음
// console.log(
//   Symbol.keyFor(symbol3)
// ); //오류


// const a = Symbol('hi');
// a = Symbol('hello');
// console.log(a); //변경 방법이 없음

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