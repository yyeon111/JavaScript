//Number - built-in object, wrapper object
//object 내장 함수 valueOf 사용해서 객체의 값을 알 수 있다.

const numObj1 = new Number(); //아무것도 없는 인자가 들어올 경우 0을 반환한다.
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

console.log(
  numObj1.valueOf(),
  numObj2.valueOf(),
  numObj3.valueOf()
);

//Number Object생성시에만 암묵적 변환이 적용되어 true false도 숫자로 인식해주고, String 숫자도 숫자로 인식해서 넣어준다.
console.log(
  new Number('-123.4567'),
  new Number('Infinity'),
  new Number(true),
  new Number(false)
);

//암묵적으로도 변환안되는 애들이 들어오면 NaN를 반환한다.
console.log(
  new Number('1/2'),
  new Number('123ABC'),
  new Number('{a:1,b:2}'),
  new Number([1,2,3])
);

//static property Number object의 property로 접근
//EPSILON 1보다 큰 가장 작은수 - 1 = 0.0000000000000?
//js는 부동소수점으로 계산되기 때문에 연산이 들어가면 값을 정확하게 비교하기 어렵다.
//그때 비교를 통해 EPSILON보다 작은 경우 거의 같은 걸로 비교해서 TRUE가 되면 같은걸로 알 수 있다.
console.log(Number.EPSILON);
console.log((0.1+0.2)-0.3<Number.EPSILON); //true 이기 때문에 가장 작은 수보다 작아서 같다고 알 수 있다.

//MAX_VALUE, MIN_VALUE : 자바스크립트에서 표현할 수 있는 수 중 가장 큰 수와 가장 작은 수
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//MAX_SAFE_INTEGER, MIN_SAFE_INTEGER 안전하게 표현 할 수 있는 최대 정수와 최소 정수
//자바스크립트는 부동소수점 체계이기때문에 안전한 정수라는 말이 존재함.
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//POSTIVE_INTEGER, NEGATIVE_INTEGER : 양의 인피니티, 음의 인피니티 표현
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

//NaN는 globalThis에서 built-in object와 같은 값을 나타낸다.
console.log(Number.NaN);

//Static methods
//isFinite, isNaN built-in과의 차이는 암묵적인 변환을 하지 않는다.
console.log(isFinite(true)); //1로 변환된다.
console.log(Number.isFinite(true)); //변환될것도 없음
console.log(isFinite(null)); //null도 값이 있는걸로 친다. 0
console.log(Number.isFinite(null)); // 변환될것도 없음.
console.log(Number(null));

//parseInt, parseFloat은 built-in과 같은 역할을 한다.
console.log(Number.parseInt(123.456));
console.log(parseInt(123.456));
console.log(Number.parseFloat(123.456));
console.log(Number.parseFloat(123.456));

//isInteger, isSafeInteger 
//isInteger는 정수인지에 대한 true,false를 반환한다
//isSafeInteger는 안전한 정수의 인티저 인지 true,false로 반환한다.

console.log(Number.isInteger(Number.MAX_SAFE_INTEGER+1)); //true 정수긴 하다. 
console.log(Number.isSafeInteger(Number.MAZ_SAFE_INTEGER+1)); //false //안전한 정수는 아니다

//인스턴스 메서드
//toExponential 
const numInExp = (123.456789).toExponential();
console.log(
  typeof(numInExp), numInExp
);
// 인자로 자릿수 제한
console.log( 
  (123.456789).toExponential(2), //소수갯수
  (123.456789).toExponential(4),
  (123.456789).toExponential(20)
);

//toFixed
//인자로 받은 정수 0-20만큼 소수점 이하를 반올림 하여 문자열로 반환
//자리수 20까지만 가능
console.log(
  // 인자가 없으면 0을 받은 것과 같음
  (111.234567).toFixed(),
  (111.234567).toFixed(0)
);
console.log(
  (111.234567).toFixed(1),
  (111.234567).toFixed(2)
);
console.log(
  // 반올림
  (111.234567).toFixed(3),
  (111.234567).toFixed(4)
);

//toPrecision 정수부 자리수보다 작은 수가 들어오면 지수로 나타냄
//정수보다 같거나 많으면, 반올림하여 인자 만큼 나타낸다.
console.log(
  // 인자가 없으면 toString처럼 그대로 문자열로 반환
  (1234.56789).toPrecision()
);
// 인자가 정수부 자릿수보다 적으면 지수로 인자수만큼 정수+실수 를 나타냄
console.log(
  (1234.56789).toPrecision(1),
  (1234.56789).toPrecision(2),
  (1234.56789).toPrecision(3)
);

// 반올림
console.log(
  (1234.56789).toPrecision(4), //정수랑 같거나 크면 인자 수만큼 정수+실수를 나타냄
  (1234.56789).toPrecision(6),
  (1234.56789).toPrecision(8)
);

//toString 해당수의 진수로 표현
const practice = 11;
console.log(practice.toString(2));
console.log(
  typeof (11).toString(),
  (11).toString(2),
  (11).toString(8),
  (11).toString(16)
);