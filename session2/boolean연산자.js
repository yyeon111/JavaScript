//컴퓨터는 메모리 절약을 위해 2진법을 사용하기 때문에 정확한 계산을 하지 못한다.
//이럴 땐 라이브러리를 사용해서 원하는 결과값을 얻을 수 있다.
//boolean 관련 연산자
let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true; // a와 b를 비교하고, 그 값과 true가 같은지 비교한다.

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

//typeof로 나타는 typeof는 String이다.
console.log(
  true === !false,
  !(1 == '1'),
  !(1 === '1'),
  !(typeof false === 'boolean') //typeof로 나오는 값의 결과는 String이다. 그래서 문자 boolean과 같다.
);

//boolean and/or단축평가
//앞에가 ture이면 or일 때 뒤에가 실행이 안된다. 볼 것 도 없이 true이기 때문
//앞에가 false이면 and일 때 뒤에가 실행이 안된다. 볼 것 도 없이 false이기 때문 

let error = true;
// error = false;
// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!'); // error가 false이면 뒤에 실행 안됨//alert, console.log는 값의 반환이 아니다.

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.'); //error가 true이면 뒤에 실행 안됨

//and 연산자 일때 false면 false를 반환하고 멈춤,
//or 연산자 일 때 true면 true를 반환하고 멈춤

//if문 삼항 연산자 사용 할 때 boolean이 아닌 값들이 Truthy, Falsy로 사용 할 수 있다.
//0이 아닌 숫자나 비어있지 않은 값은 Truthy이다.
//0이거나 빈 문자열, 빈 값들을 Falsy이다.
//하지만 truthy로 평가되는 것이지 true 값 그 자체라는 것은 아니다.
//1과 0,''만 오직 true,false 값 자체이다. 하지만 타입까지는 같지 않다.
console.log(
  1==true,
  1===true,
  1.23==true,
  ' '==true,
  {}==true,
);

// 💡 어떤 값들은 false로 타입변환됨
console.log(
  0 == false,
  0 === false,
  '' == false,
  '' === false
);
console.log(
  null == false,
  undefined == false,
  NaN == false,
);
