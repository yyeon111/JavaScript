// [
//   JSON.parse('1'),
//   JSON.parse('"2"'),
//   JSON.parse('"삼"'),
//   JSON.parse('{"a":1}'),
//   JSON.parse('[1, 2, 3]')
// ].forEach(i => console.log(i));

const objStr = '{"a": 1,"b": "2","c": "삼","d": {"a": 1}, "e": [1, 2, 3]}';

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

console.log(obj);

console.log(JSON.parse(objStr, null, 11));

const test = {
  obj (){}
}

console.log(JSON.stringify(test));