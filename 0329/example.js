function* diceTenTimes () {
  let count = 0;
  const maxCount = 10;

  while (count++ < maxCount) {
    yield Math.ceil(Math.random() * 6);
  }
}

for(const itm of diceTenTimes()){
  console.log(itm);
}

// function* genFunction () {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }

// let genObj = genFunction();
// // 로그 펼쳐서 살펴볼 것
// console.log( genObj.next());
// console.log( genObj.next());
// console.log( genObj.next());
// console.log( genObj.next());
// console.log( genObj.next());
// console.log( genObj.next());
// console.log( genObj.next());
// console.log( genObj.next());
// console.log( genObj.next());
// console.log([...genObj]);
// console.log( genObj.next());
