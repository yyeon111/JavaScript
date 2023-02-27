//PI
console.log(Math.PI);
//자연로그의 밑
console.log(Math.E);

//abs 절대값
console.log(
  Math.abs(123),
  Math.abs(-123)
);

//0반환
console.log(
  Math.abs(0),
  Math.abs(''),
  Math.abs(null),
  Math.abs([])
);

//NaN
console.log(
  Math.abs('abc'),
  Math.abs(undefined),
  Math.abs({a:1}),
  Math.abs([1,2,3])
);

const isEqual = (a, b) => {
  return Math.abs(a-b) < Number.EPSILON;
}

console.log(
  isEqual(0.1 + 0.2, 0.3)
);

//ceil, round, floor, trunc 무조건 정수로 표현. 
for(const num of [1.4, 1.6, -1.4, -1.6]){
  console.log(
    num + ' : ',
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num)
  );
}

//pow 거듭제곱
console.log(
  Math.pow(4,2),
  Math.pow(4,1),
  Math.pow(4,0), //오류 1나옴
  Math.pow(4,-1) //제곱이 음수면 분수로 바뀜
);

console.log(Math.pow(4)); //한자리는 NaN

//제곱근sqrt
console.log(
  Math.sqrt(25),
  Math.sqrt(9),
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);
//NaN
console.log(
  Math.sqrt(-25),
  Math.sqrt()
);

//max, min 숫자들 중 최대값, 최소값 찾을 수 있다.
console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
);

//random 0~1까지 무작위 값
for(let i = 0; i < 10; i++){
  console.log(Math.random())
}

//0~9 까지의 무작위 값 만들기
for(let i = 0; i < 10 ; i++){
  console.log(Math.floor(Math.random() * 10))
}

//sin cos tan asin acos atan -> 활용도 모르겠음

console.log(Number([]));
console.log(isFinite([])); //빈배열 0으로
console.log(isFinite([123,456,789])); //빈배열 아니면 NaN
console.log(isNaN([123,456,789]));
//abs도 [] 0으로 변환 가능

console.log(parseInt([])); //무조건 숫자만 있으면 됨, 빈배열 안됨 >>특이한 아이들 

console.log('안녕'.substring()); //그대로 반환 0으로 간주
console.log('안녕'.slice()); // 그대로 반환 0으로 간주
console.log(new Number([])); // 0으로 반환됨
console.log(new Number());
console.log((123.456).toFixed()); //0받은 것 처럼
console.log((132.456).toPrecision()); //그대로 반환 특이
// console.log((11).toString(39)); //에러 ParseInt는 NaN
// console.log((11).toString('A')); //에러 ParseInt는 값 그대로 반환함
//pow 하나만 => NaN,  
console.log(Math.sqrt()); //NaN 연산 들어가야 할 곳에 아무 인자도 전해주지 않거나 음수가 들어오면 NaN
console.log(Math.abs());
console.log(Number());
console.log(isNaN());
console.log(isFinite());
