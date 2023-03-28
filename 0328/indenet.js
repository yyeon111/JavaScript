const obj = {
  a: 1,
  b: '2',
  c: true,
  d: {a: 3},
  e: [1, 2, 3]
};

console.log(JSON.stringify(obj, null, 1));