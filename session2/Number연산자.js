//0으로 나누면 무한대 Infinity가 된다.
console.log(3/0);
//Infinity도 음수가 있다.
console.log(-3/0);
//Infinity의 typeof는 number이다.
let number = Infinity;
console.log(typeof number);

//문자를 숫자로 나누려고 했을 때 숫자가 아니라는 것을 NaN으로 나타낸다.
//그런데 NaN의 데이터 타입은 number이다.
let x = 1/'abc';
console.log(x);
console.log(typeof x);

//NaN인지 검사를 할 수 없다. 타입이 number이기 때문에.
//타입가지고 isNaN인지 검사를 거쳐야 한다.
let z = 1/'abc';
console.log(
  z,
  z == NaN,
  z === NaN,
  isNaN(z), // 숫자가 아닐 시 true
  Number.isNaN(z) // 보다 엄격한 버전
);

console.log(
  typeof 1, isNaN(1), Number.isNaN(1)
); // 특정 숫자로 변환 가능한 문자

console.log(
  typeof '1', isNaN('1'), Number.isNaN('1')
); // 특정 숫자로 변환 가능한 문자
console.log(
  typeof true, isNaN(true), Number.isNaN(true)
); // true는 1, false는 0으로 변환됨
console.log(
  typeof 'a', isNaN('a'), Number.isNaN('a')
); // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이
//값이 문자인 경우 아얘 Number인지 확인 불가이다. false
console.log(
  typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a')
); // NaN값인 경우

let e1 = Number('e');
console.log(typeof e1);
console.log(isNaN(e1)) // e가 숫자로 변환이 되지만, NaN이다. e가 들어가 있을 때 NaN이면 문자임을 알 수 있다.

//할당 산술 연산자 += -= 
//단항 산술 연산자
//++가 앞에 붙으면 그 값으로 계산하고 그 다음 증가시킨 값으로 계산한다
//++가 앞에 붙으면 증가시킨 값으로 먼저 계산하고 다음에 그 값으로 계산한다.


//문자열 앞에 단항 연산자 사용하면 숫자로 바꿀 수 있다.
console.log(-'10');
console.log('10');
