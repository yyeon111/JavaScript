// const person = {
//   name: '김달순',
//   age: 23,
//   languages: ['Korean', 'English', 'French'],
//   education: {
//     school: '한국대',
//     major: ['컴퓨터공학', '전자공학'],
//     graduated: true,
//   }
// };

// const personStr = JSON.stringify(person);

// console.log(typeof personStr); //string 직렬화
// console.log(personStr); //{...}

// //모든것이 직렬화 되는 것은 아니다.
// [
//   JSON.stringify(1),
//   JSON.stringify(Infinity), // ⚠️null
//   JSON.stringify(NaN), // ⚠️null
//   JSON.stringify('가나다'),
//   JSON.stringify(true),
//   JSON.stringify(null),
//   JSON.stringify(undefined),
//   JSON.stringify([1, 2, 3]),
//   JSON.stringify({x: 1, y: 2}),
//   JSON.stringify(new Date()), // ⚠️ 부분직렬화
// ]
// .forEach(i => console.log(i));

// // 이후 배울 Symbol - 직렬화되지 않음
// console.log( JSON.stringify(Symbol('hello')) ); // ⚠️ undefined
// // 이후 배울 BigInt - 오류 발생
// // console.log( JSON.stringify(1n) ); // ⚠️ bigInt 오류

// const obj = {
//   x: 1,
//   y: 2,
//   z: function () { return this.x + this.y }
// }
// console.log(obj.z())

// const objStr = JSON.stringify(obj);
// console.log(objStr); //함수 빼고 직렬화

// const func1 = (a, b) => a + b;
// function func2 () { console.log('HELLO'); }

// const func1Str = JSON.stringify(func1);
// const func2Str = JSON.stringify(func2);

// console.log(func1Str); //함수만 있을 경우 undefined
// console.log(func2Str); //함수만 있을 경우 undefined

//두번째 인자로는 직렬화 될 방식을 지정
// const obj = {
//   a: 1,
//   b: '2',
//   c: 3,
//   d: true,
//   e: false
// }

// // 1. key와 value 매개변수
// const objStr1 = JSON.stringify(obj, (key, value) => { //key, value를 가지고 직렬화 하는 방법 설정
//   if (key && key < 'a' || key > 'c') { //  key가 있고, 라는 뜻의 && 붙이기
//     // 해당 프로퍼티 생략
//     return undefined; //해당 프로퍼티를 생략한다는 뜻
//     // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
//     // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
//     // key와 value를 로그로 출력해보며 확인해 볼 것
//   }
//   if (typeof value === 'number') {
//     return value * 10;
//   }
//   return value;
// });
// console.log(objStr1);

// // 2. 반환한 key의 배열 매개변수
// const objStr2 = JSON.stringify(obj, ['b', 'c', 'd']); //디스트럭처링
// console.log(objStr2);

// //인덴트
// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   }
// };

// [
//   JSON.stringify(obj, null), //replacer 쓰지 않을 거라서 null을 넣어줌
//   JSON.stringify(obj, null, 1), //1 스페이스
//   JSON.stringify(obj, null, 2),
//   JSON.stringify(obj, null, '\t') //tab
// ]
// .forEach(i => console.log(i));

//toJoson 사용 시 stringify 접근 시 함수 return 값이 담김
// const obj = {
//   x: 1,
//   y: 2,
//   toJSON: function () {
//     return '훗, 나를 직렬화해보겠다는 건가';
//   }
// }

// console.log(
//   JSON.stringify(obj) //'훗, 나를 직렬화해보겠다는 건가';
// );

// //parse 역직렬화 데이터를 받아서 자바스크립트 코드가 문자열로 들어간다.
// [
//   JSON.parse('1'),
//   JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
//   JSON.parse('true'),
//   JSON.parse('null'),
//   JSON.parse('[1, 2, 3]'),
//   JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
// ]
// .forEach(i => console.log(i));

//receiver 함수 두번째 인자
const objStr = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';

const obj = JSON.parse(objStr, (key, value) => {
  if (key === 'c') { 
    // 해당 프로퍼티 생략
    return undefined;
  }
  if (typeof value === 'number') {
    return value * 100;
  }
  return value;
});

console.log(obj); // ⚠️ 내부까지 적용(배열 확인해 볼 것)