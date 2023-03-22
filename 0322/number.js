console.log((0.1+0.2) - 0.3 < Number.EPSILON);

console.log(Number.isInteger(Number.MAX_SAFE_INTEGER + 1)); //true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1)); //false

// 인자로 자릿수 제한
console.log(
  (123.456789).toExponential(2),
  (123.456789).toExponential(4),
  (123.456789).toExponential(6)
);

// 인자가 정수부 자릿수보다 적으면 지수로
console.log(
  (1234.56789).toPrecision(1),
  (1234.56789).toPrecision(2),
  (1234.56789).toPrecision(3)
);

// 반올림
console.log(
  (1234.56789).toPrecision(4),
  (1234.56789).toPrecision(6),
  (1234.56789).toPrecision(8)
);

console.log(
  // 반올림
  (111.234567).toFixed(3),
  (111.234567).toFixed(4)
);
// 인자로 자릿수 제한
console.log(
  (123.456789).toExponential(2),
  (123.456789).toExponential(4),
  (123.456789).toExponential(6)
);
// 반올림
console.log(
  (1234.56789).toPrecision(4),
  (1234.56789).toPrecision(6),
  (1234.56789).toPrecision(8)
);

// 인자로 자릿수 제한
console.log(
  (123.456789).toExponential(2),
  (123.456789).toExponential(4),
  (123.456789).toExponential(6)
);