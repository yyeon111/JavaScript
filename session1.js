console.log('Hello World!');
console.log(1);
console.log(true);
console.log({name: '홍길동', age: 20, married: false});
console.log('Hi!', 100, true, [1, 2, 3]);

console.log('로그 - 기본적인 출력');
console.info('로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능'); //!
console.warn('경고 - 문제가 될 수 있는 부분');
console.error('오류 - 에러 발생 상황');

//데이터 값이 바뀔 경우, 기존 위치에 새 값을 넣는 것이 아님, 다른 데이터 영역에 재할당이 된다.
let x = 1;
let y = 1;
console.log(x,y);
//같은 값이 다른 데이터 영역에 저장되지 않음 => 메모리 절약
//x,y가 같은 데이터 영역을 바라보게 된다.

let a=1, b=2, c=3;
const d=1, e=2, f=4;
console.log(a,b,c);
console.log(d,e,f);
//한번에 변수, 상수 선언 가능
//메모리RAM 휘발성이 있다. 변수 상수를 효과적으로 사용해서 메모리 공간이 낭비되지 않도록 친메모리적으로 프로그래밍 할 수 있는 방법을 고민해야한다.