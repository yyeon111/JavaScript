// console.log(new Date(2023, 4, 1)); //JS와 브라우저마다 표현하는 방식이 다름
// const test = JSON.stringify(new Date()); //시간차가 나는 toISOString 방식으로 보임
// console.log(test);

// console.log(JSON.stringify(Symbol('hello'))); //undefined
// // console.log(JSON.stringify(BigInt(1n))); //오류 발생
// console.log(JSON.stringify(Infinity));

// console.log(JSON.stringify(-Infinity));

// const obj = {
//   x: 1,
//   y: 2,
//   z: function () { return this.x + this.y }
// }
// console.log(obj.z())

// const objStr = JSON.stringify(obj);
// console.log(objStr);

// const func1 = (a, b) => a + b;
// function func2 () { console.log('HELLO'); }

// const func1Str = JSON.stringify(func1);
// const func2Str = JSON.stringify(func2);

// console.log(func1Str);
// console.log(func2Str);

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
//   }
//   if (typeof value === 'number') {
//     return value * 10;
//   }
//   return value;
// });
// console.log(objStr1);

// const a = 1;

// const b = JSON.stringify(a, (key,value) => {
//   if( key < 'a'){
//     return undefined; 
//   }else{
//     return value * 10 ;
//   }
// });
// console.log(b);

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

// const test = {
//   x: 1,
//   y:2,
//   toJSON(){
//     return '뭐';
//   }
// }

// console.log(
//   JSON.stringify(test)
// );
// console.log(test);

// const num = 1;
// const result = JSON.stringify(num);
// console.log(typeof result);

// const result2 = JSON.parse(result);
// console.log(typeof result2);

// [
//   JSON.parse('1'),
//   JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
//   JSON.parse('true'),
//   JSON.parse('null'),
//   JSON.parse('[1, 2, 3]'),
//   JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
// ]
// .forEach(i => console.log(i));

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

const objStr = {a:1,b:"ABC",c:true,d:[1,2,3]};

const obj = JSON.stringify(objStr, (key, value) => {
  if (key < 'c') { 
    // 해당 프로퍼티 생략
    return undefined;
  }
  if (typeof value === 'number') {
    return value * 100;
  }
  return value;
});

console.log(obj);