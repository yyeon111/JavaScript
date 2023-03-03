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
// console.log(personStr);
// console.log(typeof personStr); //string

// [
//   JSON.stringify(1),
//   JSON.stringify(Infinity), // ⚠️ null
//   JSON.stringify(NaN), // ⚠️ null
//   JSON.stringify('가나다'),
//   JSON.stringify(true),
//   JSON.stringify(null), //null
//   JSON.stringify(undefined), //undefined
//   JSON.stringify([1, 2, 3]),
//   JSON.stringify({x: 1, y: 2}), //{'x':1, 'y':2}
//   typeof JSON.stringify(new Date()), // ⚠️  // toISOString 형태로 나타냄 
// ]
// .forEach(i => console.log(i));
// console.log(typeof new Date()); //Object
// // 이후 배울 Symbol - 직렬화되지 않음
// console.log( JSON.stringify(Symbol('hello')) ); // ⚠️ //undefined -> 어떻게 변환할지 모르겠다 확실하지 않은
// // 이후 배울 BigInt - 오류 발생
// // console.log( JSON.stringify(1n) ); // ⚠️ 

// //function도 직렬화 되지 않음
// const obj = {
//   x: 1,
//   y: 2,
//   z: function () { return this.x + this.y }
// }
// console.log(obj.z())

// const objStr = JSON.stringify(obj);
// console.log('1',objStr); //함수만 빼고 직렬화

// const func1 = (a, b) => a + b;
// function func2 () { console.log('HELLO'); }

// const func1Str = JSON.stringify(func1); //함수 하나만 있을 때 -> undefined
// const func2Str = JSON.stringify(func2);

// console.log(func1Str);
// console.log(func2Str);

//직렬화 될 방식 설정 replacer함수
//key, value에 조건울 줘서 원하는 것들을 방식대로 직렬화 할 수 있다.
// const obj = {
//   a: 1,
//   b: '2',
//   c: 3,
//   d: true,
//   e: false
// }

// // 1. key와 value 매개변수
// const objStr1 = JSON.stringify(obj, (key, value) => {
//   if (key && key < 'a' || key > 'c') {
//     // 해당 프로퍼티 생략
//     return undefined;
//     // ⚠️ 조건에 key && 을 붙이지 않으면 항상 undefined가 반환됨
//     // key가 공백('')일 때(value는 객체 자체) undefined를 반환하므로...
//     // key와 value를 로그로 출력해보며 확인해 볼 것
//     //key가 공백일 경우를 대비해서 key &&를 지정
//   }
//   if (typeof value === 'number') {
//     return value * 10; //return 해야 json 방식이 저장됨
//   }
//   return value;
// });
// console.log(objStr1);

// //아예 키를 배열로 지정 해 줄 수 있다. 
// const objStr2 = JSON.stringify(obj, ['b','c', 'd']);
// console.log(objStr2);

//인덴트 3번째 인자
//중간 인자로 특정 기능을 통해 하지 않을 거면 null로 안한다고 표시
//스페이스, tab을 활용해서 보기 좋게 출력 해 볼 수 있다.
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
//   JSON.stringify(obj, null),
//   JSON.stringify(obj, null, 1),
//   JSON.stringify(obj, null, 2),
//   JSON.stringify(obj, null, '\t')
// ]
// .forEach(i => console.log(i));

//toJSON 프로퍼티 
// const obj = {
//   x: 1,
//   y: 2,
//   toJSON: function () {
//     return '훗, 나를 직렬화해보겠다는 건가';
//   }
// }

// console.log(
//   JSON.stringify(obj)
// );
// //toJSON의 함수 프로퍼티가 들어가 있을 경우 직렬화를 하면 다른 프로퍼티 값은 안나오고, toJSON의 return만 나온다.


// //역직렬화 => JSON되있는 것을 JS로 바꾸기
// //JSON은 따옴표가 붙어서 출력이 되기 때문에 그래서 STRING으로 되는 것임
// //그래서 String 되어 있는 것을 풀어 주기 위해 따옴표 표시를 곡 해줘야한다. => key에도 따옴표 표시
// [
//   JSON.parse('1'),
//   JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
//   JSON.parse('true'),
//   JSON.parse('null'),
//   JSON.parse('[1, 2, 3]'),
//   JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
// ] //key에도 따옴표 표시를 해줌,
// .forEach(i => console.log(i));

//receiver함수 key와 value를 받아서 충족하는 것들을 기능을 한 다음 뱉는다.
// const objStr = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';

// const obj = JSON.parse(objStr, (key, value) => {
//   if (key === 'c') { 
//     // 해당 프로퍼티 생략
//     return undefined;
//   }
//   if (typeof value === 'number') {
//     return value * 100;
//   }
//   return value;
// });

// console.log(obj); // ⚠️ 내부까지 적용(배열 확인해 볼 것)
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}

const obj2 = JSON.parse(JSON.stringify(obj1));
//Json화 하고 다고 parse로 다시 JS화 하면 깊은 복사를 할 수 있다.
//parse분석하다
console.log(obj1);
console.log(obj2);
obj1.a++;
obj1.b.c++;
obj1.b.d.e++;
obj1.b.d.f.g++;

console.log(obj1);
console.log(obj2);

const obj3 = {
  a: 1,
  b: 2,
  c: function () { return this.a + this.b }, //undefined
  d: new Date(), //ISOString 형태로 나타냄 =>시간차, 원하는 서식이 아님.
  e: Symbol('안녕'), //undefined
  // g: 1n // ⚠️ 오류 발생
}

const obj4 = JSON.parse(JSON.stringify(obj3));

console.log(obj3);
console.log(obj4);

const test = {c: Symbol('안녕')};
const test1 = JSON.stringify(Symbol(test)); //undefined
// const test2 = JSON.parse(test1); 
// // console.log(test2);
//Json에서 안되는거는 parse로 했을 때도 안됨. 함수, Date, Symbol, BigInt

//일부 브라우저만 가능하지만 깊은 복사 되고, date. bigint도 제대로 복사. 함수, symbol은 여전히 안됨
const obj5 = {
  a: 1,
  b: 2,
  // c: function () { return this.a + this.b },
  d: new Date(),
  // e: Symbol('안녕'),
  g: 1n
}

const obj6 = structuredClone(obj5);

console.log(typeof obj5); //object =>Json화 되는 것을 애기 하는게 아님, JS로서의 깊은 복사 이야기
console.log(typeof obj6); //object 

const obj = {
  x: 1,
  y: 2,
  toJSON: function () {
    return '훗, 나를 직렬화해보겠다는 건가';
  }
}

console.log(
  obj.toJSON()
);