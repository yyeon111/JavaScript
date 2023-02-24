//키와 value가 있고, typeof 가 Object일 때 가능
//String은 생성자 함수로 만들어진 String prototype이지만 뿌리에는 Object이기 때문에 가능 한 것

// console.log(
//   new String('ABC') instanceof Object,
//   new Number(123) instanceof Object,
//   [] instanceof Object,
//   (function (){}) instanceof Object,
//   globalThis instanceof Object
// );

// console.log( new String('ABC'));

// console.log(
//   new Object(),
//   new Object(null),
//   new Object(undefined)
// );

// console.log(
//   new Object(1),
//   new Object('ABC'),
//   new Object(true),
//   new Object([1,2,3])
// );

// //Object의 메서드
// //assign = property copy
// //객체로서 전달 해야한다.
// //(대상객체, assign할 것)

// const intro1 = {
//   name: '홍길동'
// };
// const intro2 = {...intro1};

// console.log(intro1, intro2);

// const personal = {
//   age: 25,
//   married: false
// };
// const career = {
//   job: '개발자',
//   position: '팀장'
// };

// Object.assign(intro1, personal);
// console.log(intro1);

// Object.assign(intro2, personal, career);
// console.log(intro2);

// const obj1 = new Object();
// const obj2 = { x: 1, y:2 };
// const obj3 = { y: 3}; //키가 중복되면 할당된게 우선. 뒤집어씀
// const obj4 = { z: {a: 1}};

// Object.assign(obj1, obj2, obj3, obj4);
// console.log(obj1);

// obj2.x = 0;
// obj4.z.a = 2;

// console.log(obj1, obj2, obj4); //얕게 복사 지원. 깊게 복사는 안됨. 

// //keys, values, entries 배열로 반환.
// //entries => key, value를 배열로 만든걸 배열로
// //typeof 가 Object인 것만 가능하다.
// //Number, String, Array 빌트인 객체가 맞지만, 생성자 함수로서의 기능을 하고 있기 때문에 typeof 를 하면 function이기 때문에 Object관련 메서드 안먹힘. 
// const obj = {
//   x: 1,
//   y: 2,
//   z: 3
// };

// console.log(
//   Object.keys(obj),
// );

// console.log(
//   Object.values(obj),
// )

// console.log(
//   Object.entries(obj),
// );

//preventExtensions 프로퍼티 추가 금지.
//isExtensible 프로퍼티 추가 가능 여부 확인. => 가능 true
//해제 불가능
//수정 가능 삭제 가능
// const obj = {x: 1, y: 2};
// console.log(Object.isExtensible(obj));

// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));

// obj.x++; //수정 가능
// delete obj.y; //삭제 가능
// obj.z = 3; //추가 불가능
// console.log(obj);

// // const test = 'test';
// // console.log(Object.entries(test));
// // console.log(typeof test);

// const arr = [1,2];
// console.log(Object.isExtensible(arr));
// Object.preventExtensions(arr);
// console.log(Object.isExtensible(arr));

//seal 프로퍼티 추가와 삭제 금지
//preventExtension 한단계 업그레이드 버전
//isSealled 실되었는지에 대한 여부 => 되있으면 true
// const obj = { x: 1, y: 2};
// console.log(Object.isSealed(obj));
// Object.seal(obj);
// console.log(Object.isSealed(obj));
// obj.x++;
// delete obj.y;
// obj.z = 3;

// console.log(obj); //수정은 가능

//freeze => 객체 동결 수정, 삭제, 추가 불가능 읽기전용
//isFrozen 얼려있는지? 얼려있으면 true
// const obj = {x: 1, y:2};
// console.log(Object.isFrozen(obj));
// Object.freeze(obj);
// console.log(Object.isFrozen(obj));
// obj.x++;
// delete obj.y;
// obj.z = 3;
// console.log(obj);

//얕게만 얼림.
// const obj = {
//   x: 1,
//   y: {a: 1}
// };

// Object.freeze(obj);

// obj.x++;
// obj.y.a++; //변동 되었다.
// console.log(obj);

// const test = 'hello';
// Object.freeze(test);
// test[0] = 'H';
// console.log(test);
// console.log(Object.isFrozen(test));