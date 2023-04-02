for(var i = 1; i <= 5; i++) {
  var pow2 = Math.pow(i,2);
  console.log(pow2);
}

console.log(i, pow2);

// // for문의 스코프도 무시
// for (var i = 1; i <= 5; i++) {
//   var pow2 = i ** 2;
//   console.log(pow2);
// }

// console.log(i, pow2);

console.log(hoisted1);

var hoisted1;
console.log(hoisted1);

// console.log(hoisted1);
// let hoisted1 = 'Hello';
