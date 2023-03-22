console.log(
  isFinite(1),
  isFinite(0),
  isFinite('1'), //숫자변환
  isFinite(null),
  isFinite('true'), //숫자x
  isFinite('false'), //숫자x
  isFinite('[]'), //숫자x
  isFinite(true),
  isFinite(false),
  isFinite([]), 
  isFinite({}), //숫자변환x
  isFinite(''), 
  isFinite(' '),
)
//있다.
console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

console.log([]==0);
console.log({}==0);
console.log(''==0);
console.log(' '==0);