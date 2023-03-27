[
  JSON.parse('1'),
  JSON.parse('"가나다"'), // ⚠️ 안쪽에 따옴표 포함해야 함
  JSON.parse('true'),
  JSON.parse('null'),
  JSON.parse('[1, 2, 3]'),
  JSON.parse('{"x": 1, "y": 2}') // ⚠️ key도 따옴표로 감싸야 함
]
.forEach(i => console.log(i));

const objStr = '{"a":1,"b":"ABC","c":true,"d":[1,2,3]}';

const obj = JSON.parse(objStr, (key, value) => {
  if (key === 'c') { 
    // 해당 프로퍼티 생략
    return undefined;
  }
  if (typeof value === 'number') {
    return value * 100;
  }
  return value;
});

console.log(obj); // ⚠️ 내부까지 적용(배열 확인해 볼 것)

//Json , pasre undefined 은 반환x filter