//JS의 배열은 다른 타입의 자료형들이 섞여서 들어간다.
//접근이 상대적으로 느림
//추가 삭제는 빠름

//배열 리터럴
const arr1 = [];
const arr2 = [1,2,3];
const arr3 = [1,,2,,3];
console.log(arr1.length, arr1);
console.log(arr2.length, arr2);
console.log(arr3.length, arr3);
//Array라는 빌트인 객체의 프로퍼티 함수들 => Static
//array는 객체이기 때문에 prototype Array의 property, method 사용 할 수 있다.
//원시형들은 wrapper object 덕에 prototype을 가지고 property, method 사용 할 수 있다.

//생성자 함수
const arr = new Array();
console.log(arr);
console.log(arr.length);
//생성자 함수의 인자에 들어가는 수는 length이다. 
//기본적으로 undefined가 들어간다.
const arr4 = new Array(3);

console.log(arr4);
console.log(arr4.length);
console.log(
  arr4[0], arr4[1], arr4[2] //undefined undefined undefined
);

//대신 숫자가 1개 이상 혹은 숫자 아닌 데이터타입이 들어가면 배열에 들어간다.
const arr5 = new Array(1, 2, 3);
const arr6 = new Array('ABC');
const arr7 = new Array(true);
const arr8 = new Array('',1); //암묵적인 변환없이 그대로 인식한다.

console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(arr8);

//BUILT-IN Array의 정적 메서드 of
//뭐든 들어와도 됨
//숫자 하나가 들어오더라도 배열로 만들어준다.
//이터러블, 배열, 유사배열객체 있는 그대로 넣어준다.
const arr9 = Array.of(1);
const arr10 = Array.of(1,2,3);
const arr11 = Array.of('ABC',true,null,undefined,NaN,'','1');
const arr15 = Array.of([1, 2, 3]);
const arr16 = Array.of({
  '0': true,
  '1': false,
  '2': null,
  length: 3
});
console.log(arr9,arr10,arr11,arr15,arr16);

//BUILT-IN Array 정적 메서드 from
//배열, 이터러블, 유사배열객체를 인자로 받아 배열로 변환.
//위 아닌 것들 들어오면 오류 혹은 빈객체임. 사용X
//틀을 다 빼고 배열로 나눠서 넣어버린다.
const arr12 = Array.from([1, 2, 3]);
const arr13 = Array.from('ABCDE');
const arr14 = Array.from({
  '0': true,
  '1': false,
  '2': null,
  length: 3
});
// const arr17 = Array.from(1,2,3);
const arr17 = Array.from(true);
console.log(arr12);
console.log(arr13);
console.log(arr14);
// console.log(arr17);

//유사배열 객체에서는 For문만 가능
//for of는 이터러블만 가능하다. => String, array

//Array.from 은 얕은 복사
//대신 참조타입 요소의 내부가 바뀔 경우는 바뀐다. => 깊은 복사
// const arr20 = [{x: 1}, {x: 2}];
// const arr21 = Array.from(arr1);
// arr21.push({x: 3});

// // 참조타입 요소의 내부값이 바뀔 경우
// arr20[0].x = 0;
// console.log(arr20, arr21);

const test1 = [{x: 1}, {x: 2}];
const test2 = Array.from(arr1);
test2.push({x: 3});

// 참조타입 요소의 내부값이 바뀔 경우
test1[0].x = 0;
console.log(test1, test2);

//from의 두번째 인자의 mapping 함수
//인자로 받아서 기능 수행하여 새로운 배열로 만듦.
const test3 = [1, 2, 3, 4, 5];
const test4 = Array.from(test3, x => x + 1);
const test5 = Array.from(test3, x => x * x);
const test6 = Array.from(test3, x => x % 2 ? '홀' : '짝');

console.log(test4);
console.log(test5);
console.log(test6);