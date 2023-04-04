const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운': '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

const italian = {
  favorite: '피자'
};

// console.log(korean.makeStew(true, 1));

italian.makeStew = korean.makeStew;
// console.log(italian);
// console.log(italian.makeStew(false, 2));

console.log(italian.makeStew.call(korean, false, 2));
console.log(italian.makeStew.apply(korean, [false, 2]));

const module1 = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module1.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined
// console.log(unboundGetX);
const boundGetX = unboundGetX.bind(module1);
console.log(boundGetX);
console.log(boundGetX());
// Expected output: 42
