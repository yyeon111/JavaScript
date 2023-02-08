function add(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add(1, 3, 5, 7)
);