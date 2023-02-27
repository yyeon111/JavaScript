//Infinity, NaN, undefined => 프로퍼티나 매서드 갖고 있지 않고 값 반환 할 때 사용 되는 객체들
//null은  가리키는 값 자체가 없음을 나타내기 때문에 객체가 따로 없다.
//이외에 다른 빌트인 객체들이 여러개 있다.
//래퍼 객체도 빌트인 객체 
//빌트인 함수, 그냥 사용 가능

//isFinite 유한수, 무한수
//암묵적 변환 가능 null => 0 
console.log(
  isFinite(1),
  isFinite(0),
  isFinite('1'),
  isFinite(null) 
); //true

console.log(
  isFinite(1/0),
  isFinite(Infinity),
  isFinite(-Infinity),
  isFinite(NaN), //숫자로 변환이 안되는 값
  isFinite('ABC'), // 숫자로 변환이 안되는 값
  isFinite(undefined)
);

//isNaN()
console.log(
  isNaN(NaN),
  isNaN('ABCDE'),
  isNaN({}),
  isNaN(undefined)
);

//parseFloat => 실수로 변환 시켜줌
//공백 제거 하고 숫자인 부분만 실수로 만들어준다.
//배열이여도 맨 앞에만 숫자라면 실수로 만들어준다.
console.log(
  parseFloat(123.4567),
  parseFloat('123.4567'),
  parseFloat(' 123.456 ')
);

//0이 올 경우는 소수점 밑 버림. => 실수는 우리가 보이는 정수와 같은 모양도 된다. 
console.log(
  parseFloat('123.0'),
  parseFloat('123'),
  parseFloat(' 123ABC '),
  parseFloat([123, 456, 789]),
  parseFloat({0:1, 1:2}) //객체는 NaN
);

//숫자로 변환이 안되는 것들은 NaN로 반환
console.log(
  parseFloat('ABC123'),
  parseFloat({x: 1}),
  parseFloat([]),
  parseFloat(['a', 1, true])
);

//parseInt 받은 실수를 정수로 변환. 타입은 실수이다. JS에서는 정수라는 개념 자체가 없음.
//소수점 뒤 버림
console.log(
  parseInt(123),
  parseInt('123'),
  parseInt(' 123.4567 '),
  parseInt('345.6789')
);

//두번째 인자로 2~36 넣으면 진수로 표기한 숫자로 인식하여 10진수로 바꿔준다.
console.log(
  parseInt(),
  parseInt('11'),
  parseInt('11',8),
  parseInt('11',16),
  parseInt('11',32),

  parseInt('11',37), //무효한 숫자는 NaN
  parseInt('11','A') //문자를 넣으면 숫자 그대로를 10진법으로 알려줌
);

console.log(
  parseInt('ABC123'),
  parseInt({x: 1}),
  parseInt([]),
  parseInt(['a', 1, true])
);

//enocodeURI
//특정 문법 제외한 곳을 아스키 문자로 반환 해 준다.
//전체적인 코드를 전달 할 때 사용
const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI);

console.log(encodedURI);

//encodeURIComponent() 문법 상관없이 전부 아스키 문자로 반환.
const keyword = '얄코';
const encodedKeyword = encodeURIComponent(keyword);
console.log(encodedKeyword);

//decodeURI
// const previousURI = 'https://www.google.com/search?q=%EC%96%84%EC%BD%94';
// const decodedURI = decodeURI(previousURI);

// console.log(decodedURI);

const previousURI = '%EC%96%84%EC%BD%94';
console.log(decodeURIComponent(previousURI));