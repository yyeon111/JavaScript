// &&는 truthy를 falsy로 대체, ||는 falsy를 truthy로 대체, ??는 null 병합 연산자로 null과 undefined일때만 대체
let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
  a ?? '기본값',
  b ?? '기본값',
  c ?? '기본값',
  d ?? '기본값',
  e ?? '기본값',
);

console.log(
  a || '기본값',
  b || '기본값',
  c || '기본값',
  d || '기본값',
  e || '기본값',
);

//and or null병합 연산자를 할당연산자와 함께 사용 할 수 있다. 병합 할당 연산자
let x = 0;
let y = '';
let z = null;

x ||= 100;
y &&= '있어야 바뀜';
z ??= '기본값';

console.log(x, y, z);