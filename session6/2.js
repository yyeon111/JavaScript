//빌트인 함수
//선언 없이 사용 할 수 있는 함수를 빌트인 함수라고 함.
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects#%ED%95%A8%EC%88%98_%EC%86%8D%EC%84%B1

console.log(
  isFinite(1),
  isFinite(0),
  isFinite('1'),
  isFinite(null)
);

//유한수이면 true, 무한수거나 수로 평가 할 수 없는 값 false반환

console.log(
  isFinite(1/0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN),
  isFinite('abc')
);

console.log(Infinity);
Infinity = 3;
console.log(Infinity);

// isNaN 숫자로 인식될 수 없는 값 true, 숫자 타입 아닌 숫자여도 숫자로 변환에서 넘버로 해줌.
console.log(isNaN('e'));
console.log(Number('3'));

console.log(typeof Number('s'));
console.log(Number('e')); //10의 거듭제곱 횟수 3e3 => 3*10의 3거듭제곱

//parseFloat 실수를 반환. 문자나 공백이면 제외하고 숫자만 반환한다. //소수점이 있는 수
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.4567 ')
);
console.log(
  parseFloat('123.0'), //소수점이 0으로 오면 0을 버린다.
  parseFloat('123'),
  parseFloat(' 123ABC '), //숫자 뒤에오는 문자는 버린다.
  parseFloat([123, 456, 789]) //배열일 때는 앞 element만 반환, 객체는 NaN으로 됨.
);

console.log(
  parseFloat('ABC123'), //문자가 먼저오면 변환 안됨
  parseFloat({x: 1}),
  parseFloat([]),
  parseFloat(['a', 1, true]) //문자가 먼저오면 변환 안됨.
);

//parseInt는 실수를 반환하는데 소수점을 버린다. 정수로 바꿔준다.
console.log(
  parseInt('abc'),
  parseInt('{}'),
  parseInt('[]')
);

//parseInt 두번째 인자로 2~36을 넣으면 해당 진법으로 해석해서 반환한다.
console.log(
  parseInt('11'),
  parseInt('11', 2), //2진법으로 쓴 11이다. 10진법으로 바꿔준다  11을 2진법으로 바꾸라는 뜻이 아님.
  parseInt('11', 8),
  parseInt('11', 16),
  parseInt('11', 32),

  parseInt('11', 37), //진법이 넘어가면 NaN 반환
  parseInt('11', 'A'), //엉뚱한 숫자는 해당 숫자 그대로 반환한다.
);

//encodeURI, encodeURIComponent
//URI는 ASKII 로 구성되어야 하기 때문에 실제 URI값은 다르다.
//아스키가 아닌 문자를 아스키로 변환하는 인코딩.

// const searchURI = 'https://www.google.com/search?q=얄코';
// const encodedURI = encodeURI(searchURI);

// console.log(encodedURI); //encodeURI는 문법을 해석해서 특정 기능 가진 애들을 제외한 키워드만 아스키로 걸러준다.

//endcodeURIComponent는 다 바꿔줌
//누군가에게 URI를 전달 할 때 encodeURI를 사용하고, URI를 조립하면서 코딩할 때는 encodeURIComponent를 사용한다.
const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);

console.log(encodedKeyword);
const searchURI = `https://www.google.com/search?q=${encodedKeyword}`;
console.log(searchURI);

//decodeURI decodeURIComponent 반대기능

console.log(parseFloat([123,456]));
console.log(parseFloat({1:1,2:2}));
console.log(parseInt('1.11'));
console.log(parseInt('13a3'));
console.log(parseInt([1,2,3]));
console.log(
  parseInt('123.0'), //소수점이 0으로 오면 0을 버린다.
  parseInt('123'),
  parseInt(' 123ABC '), //숫자 뒤에오는 문자는 버린다.
  parseInt([123, 456, 789]) //배열일 때는 앞 element만 반환, 객체는 NaN으로 됨.
);
console.log(
  parseInt('ABC123'), //문자가 먼저오면 변환 안됨
  parseInt({x: 1}),
  parseInt([]),
  parseInt(['a', 1, true]) //문자가 먼저오면 변환 안됨.
);

console.log(isNaN('3'));

console.log(parseFloat('1a234'));
