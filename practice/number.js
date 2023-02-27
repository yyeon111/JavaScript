//Number객체
const numObj1 = new Number();
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);
console.log(numObj1,numObj2,numObj3);

console.log(
  typeof numObj1, //typeof -> object
  typeof numObj2,
  typeof numObj3
);

console.log(typeof numObj1.valueOf()); //-> Number
const stringObj1 = new String();
console.log(typeof stringObj1.valueOf()); // -> string

const test = new Number('123');
console.log(typeof test.valueOf()); //문자가 들어와도 원시값이 number로 바꿔진다.

console.log(
  new Number(true),
  new Number(false) // string은 값 그대로 보여줌
)

console.log(
  new Number('1/2').valueOf(),
  new Number('123ABC').valueOf(),
  new Number('ABC').valueOf(),
  new Number('{a: 1, b: 2}').valueOf(),
  new Number([1, 2, 3]).valueOf()
); //parseInt, parseFloat과 다른점. 

//Number Object property
//EPSILON
//Number형에서 표현 가능한 1보다 가장 큰수 - 1의 값
//실수 합산 할 때 나머지랑 비교했을 때 같은 값으로 도출 할 수 있다.
console.log(Number.EPSILON);
console.log(0.1 + 0.2);
console.log((0.1+0.2)-0.3 < Number.EPSILON); //true로 같은 값인 걸 도출

//MAX_VALUE, MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//MAX_SAFE_INTEGER, MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Infinity === Number.POSITIVE_INFINITY); //true
console.log(-Infinity === Number.NEGATIVE_INFINITY); //true
console.log(typeof Number.POSITIVE_INFINITY);
console.log(typeof Infinity);

console.log(NaN === Number.NaN); //false
console.log(typeof Number.NaN);
console.log(typeof NaN);
//빌트인 NaN는 쓰기 비교 불가. 그냥 값만을 나타내기 위한 객체
//Nuber.NaN도 같은 역할을 한다. 그냥 값만을 나태내기 위한 것
//둘의 값은 같다. 뜻이 같다.

//Number.methods
//isFinite, isNaN => 빌트인 메서드와 같지만 암묵적인 변환을 하지 않는다.
console.log(
  isFinite(null), //암묵적 숫자 변환 => 숫자 NaN 변환 필요 없음 
  isNaN('abc'), // 암묵적 숫자 변환 => 숫자 NaN 변환됨 => true
  Number.isFinite(null), // 숫자로 변환되는 값 => 숫자 NaN 변환 => false 
  Number.isNaN('abc'), // 숫자 변환도 안됨 => false
  isFinite([123,456]),
  isNaN([123,456]) //암묵적인 숫자 변환은 되지만, 배열 객체는 안됨
);

//NaN 실제 찍히는 값들
//Number.NaN는 암묵적 숫자 변환을 할 때 내부적으로 정보를 주고 받음 보이는 값은 아님
//없다는 뜻의 같은 값이다.

//parseInt parseFloat
//Number와 built-in 과 사용법이 같다.
//암묵적인 변화 가능 배열 가능
console.log(
  Number.parseInt([123,456,789]),
  Number.parseFloat([123,456,789])
);

console.log(
  parseInt(' 123.456.789 '),
  parseInt('123A'),
  parseFloat(' 123.456.789 '),
  parseFloat('123A'),
);

//isInteger, isSafeInteger 
//암묵적인 변환을 하지 않는다.
console.log(
  Number.isInteger(123),
  Number.isInteger(123.45) //정수 아님
);

console.log(
  Number.isSafeInteger(123),
  Number.isSafeInteger(123.45) //정수아님
);

console.log(
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER),
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);