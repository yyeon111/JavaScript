function fact (x) {
  return x === 0 ? 1 : x * fact(x - 1);
}

const result = fact(3);
console.log(result);