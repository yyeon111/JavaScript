function currying (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return (a + b) * c - d;
      }
    }
  }
}

const first = currying(2);
const second = currying(2)(3);
const third = currying(2)(3)(4);

console.log(first, second, third);
const result = first(3)(4)(5);
console.log(result);
