//수학 관련 기능을 하는 BUILT-IN OBJECT

//property
console.log(Math.PI); //원주율

console.log(Math.E); //자연로그의 밑

//methods
console.log(Math.abs(-3));
console.log(Math.abs(3));

//암묵적 변환
console.log(
  Math.abs(0), //0
  Math.abs(''), //0
  Math.abs(null), //0
  Math.abs([]), //0
  Math.abs([1]), //1
  Math.abs(['1']), //1
  Math.abs([1,2,3]), //NaN
  Math.abs(['1','2','3']),//NaN
  Math.abs({}),//NaN
  Math.abs({a:1,b:2}), //NaN
  Math.abs(null), //0
  Math.abs(undefined), //NaN 
  Math.abs(NaN), //NaN
  Math.abs(Infinity), //Infinity
  Math.abs(-Infinity),
  Math.abs() //NaN
);


// 0 반환
console.log(
  isFinite(0), //true
  isFinite(''), //true
  isFinite(null), //true
  isFinite([]), //true
  isFinite([1]), //true
  isFinite(['1']), //true
  isFinite([1,2,3]), //false
  isFinite(['1','2','3']),//false
  isFinite({}),//false
  isFinite({a:1,b:2}), //false
  isFinite(null), //true
  isFinite(undefined), //false 
  isFinite(NaN), //false
  isFinite(Infinity), //false
  isFinite(-Infinity) //false
);

console.log(
  isNaN(0), //false
  isNaN(''), //false
  isNaN(null), //false
  isNaN([]), //false
  isNaN([1]), //false
  isNaN(['1']), //false
  isNaN([1,2,3]), //true
  isNaN(['1','2','3']),//true
  isNaN({}),//true
  isNaN({a:1,b:2}), //true
  isNaN(null), //false
  isNaN(undefined), //true 
  isNaN(NaN), //true
  isNaN(Infinity), //false
  isNaN(-Infinity), //false
  isNaN() //true
);

//무조건 정수로 표현 ceil, round, floor, trunc //음수일 때 floor, trunc 주의
for (const num of [1.4, 1.6, -1.4, -1.6]) {
  console.log(
    num + ' : ',
    Math.ceil(num),
    Math.round(num),
    Math.floor(num),
    Math.trunc(num),
  );
}

// NaN 반환
console.log(
  Math.ceil(),
  Math.round(),
  Math.floor(),
  Math.trunc()
);

//falsy면 0으로 쳐준다.
console.log(
  Math.ceil(0),
  Math.round([]),
  Math.floor(Infinity),
  Math.trunc(null),
  Math.trunc('')
);

//아무것도 넣지않거나, 암묵적 변환해도 숫자가 안되면 NaN
console.log(
  Math.ceil('A'),
  Math.round({}),
  Math.floor(NaN),
  Math.trunc(undefined)

);

//거듭제곱 pow 두개의 인자를 받는다.
//한개의 인자를 주면 NaN로 반환.
console.log(
  Math.pow(4, 2), // 4 ** 2
  Math.pow(4, 1), // 4 ** 1
  Math.pow(4, 0), // 4 ** 0 //0의 거듭제곱은 없음. 에러로 무조건 1을 반환한다.
  Math.pow(4, -1) // 4 ** -1 //음수의 거듭제곱이면 숫자를 분수로 바꾼 후 절대값의 거듭제곱 한다.
);
// NaN 반환
console.log(
  Math.pow(4)
);

//sqrt
//하나의 인자를 받는다.
console.log(
  Math.sqrt(25), // 25 ** 0.5
  Math.sqrt(9),
  Math.sqrt(2),
  Math.sqrt(1),
  Math.sqrt(0)
);
//음수의 제곱근은 존재하지 않는다.
//아무것도 주어지지 않거나, 암묵적 변환이 안되면 NaN
// NaN 반환
console.log(
  Math.sqrt(-25),
  Math.sqrt()
);

console.log(
  Math.max(8, 5, 9, 6, 3, 1, 4, 2, 7),
  Math.min(8, 5, 9, 6, 3, 1, 4, 2, 7)
);

//배열로는 안됨
console.log(
  Math.max([8, 5, 9, 6, 3, 1, 4, 2, 7])
)

//rand 0~1까지의 무작위의 값 정하기
//몇개까지 무작위의 값을 볼건지는 반복문을 통해서 지정을 해 줘야한다.
//소수점으로 나오기 때문에 정수로 하고 싶으면 다른 메서드를 추가로 사용해서 표기 할 수 있다.
for(let i=0; i<10; i++){
  console.log(Math.random());
}

for(let i=0; i<10; i++){
  console.log(Math.random()*10);
} //*10을 통해서 소수점 자리수만 이동.

for(let i=0; i<10; i++){
  console.log(
    Math.trunc(Math.random()*10)
  );
}

console.log('--------------------------------------------');
for (let i = 0; i < 10; i++) {
  console.log(
    Math.floor(Math.random() * 10)
  );
}

//sin, cos, tan, asin, acos, atan
console.log(
  // 1(또는 근사값) 반환
  Math.sin(Math.PI / 2),
  Math.cos(Math.PI * 2),
  Math.tan(Math.PI / 180 * 45)
);

console.log(
  // Math.PI / 2 반환
  Math.asin(1),
  Math.acos(0),
  Math.atan(Infinity)
);