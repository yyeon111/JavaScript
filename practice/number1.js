// //instance method
// //문자열로 반환
// //숫자는 괄호로 감싼다. 소수점과 구별 위해서
// //toExponenetial => 지수표기법으로 나타냄
// const numInExp = (123.456789).toExponential();
// console.log(
//   typeof numInExp, numInExp 
// );
// //인자로 소수 자리수 제한 가능
// console.log(
//   (123.456789).toExponential(2),
//   (123.456789).toExponential(4),
//   (123.456789).toExponential(6)
// );

// //toFixed 인자만큼 소수 반올림해서 표시
// //string -> 빈칸은 가져올 것 없음으로 봐서 빈칸 가져옴 차이점
// //빈칸이면 0과 같다.
// console.log(
//   (123.456789).toFixed(),
//   (123.456789).toFixed(0),
//   (123.456789).toFixed(1),
//   (123.456789).toFixed(2)
// );

//toPrecision
//인자가 정수보다 보다 적으면 지수표기법으로 변환하고 갯수 전체 갯수 인자만큼 표기
console.log(
  (123.456789).toPrecision(), //숫자 그대로 반환
  (123.456789).toPrecision(1),
  (123.456789).toPrecision(2),
  (123.456789).toPrecision(3)
);

//정수보다 인자가 크면 전체 반올림 갯수 인자만큼 표기
console.log(
  (132.456789).toPrecision(4),
  (123.456789).toPrecision(5),
  (123.456789).toPrecision(6),
);

//toString 2-36 해당 진수로 표현.
console.log(
  (11).toString(),
  (11).toString(2),
  // (11).toString(40), //오류남 
  (11).toString(8),
  // (11).toString('A') 오류남 아예안됨
);