const arrLike = {
  0: '🍎',
  1: '🍌',
  2: '🥝',
  3: '🍒',
  4: '🫐',
  length: 5
};

console.log(Array.from(arrLike));

const test = {
  0: '일',
  1: '이',
  length:3
};
console.log(Array.from(test));

const test1 = new Array(3);
console.log(test1);
const test2 = Array.of(3);
console.log(test2);
const test3 = Array.of({a:1, b:2, length:3});
console.log(test3);
const test4 = Array.from({1:1,2:2,length:3});
console.log(test4);
const array = [1,2,3,4,5];
const result=Array.from(array, x=>x+1);
console.log(result);
result[0] = 18;
console.log(array,result);