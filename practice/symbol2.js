console.log(Symbol('how').toString());
console.log(Symbol('how').description);

const result = Symbol.for('how');
console.log(Symbol.keyFor(result));

console.log(typeof 0b111);

const test = Symbol('hi');
console.log(typeof test);

const bigNum = 1n;
console.log(typeof bigNum);