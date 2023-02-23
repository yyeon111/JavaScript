const test = new Array({0:1});
console.log(test);

const test1 = new Array([1,2,3]);
console.log(test1);

const test3 = new Array(3);
console.log(test3);
// test3[0].push(1); // 오류
// console.log(test3);

test3.push(1);
console.log(test3); // 기존 만들어진 length 뒤에 1이 psuh됨