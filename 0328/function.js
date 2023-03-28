const obj = {
  a: 1,
  b: '2',
  c: 3,
  d: '사',
  e: true,
  f: false,
  g: {a: 1},
  h: [1, 2, 3],
  i: 'pass'
};

console.log(JSON.stringify(obj));

const result = JSON.stringify(obj, (key, value) => {
  console.log(`key = ${key}`);
  console.log(`value = ${value}`);
  if (key && key < 'a' || key > 'h') {
    return undefined;
  }
  if (typeof value === 'number') {
    return value * 100;
  }
  return value;
})

console.log(result);

console.log(JSON.stringify(obj, ['a', 'b', 'c']));
