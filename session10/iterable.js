console.log(
  [][Symbol.iterator],
  ''[Symbol.iterator],
  new Set()[Symbol.iterator],
  new Map()[Symbol.iterator]
);
for(let i = 0; i<12; i++){
  console.log(Math.ceil(Math.random()*6)); //random * (최대값)
}

const arr = [1, 'A', true, null, {x: 1, y:2}];
const arrIterator = arr[Symbol.iterator]() //Symbol.iterator를 실행했을 때 반환되는 객체 = iterator -> iterable protocal
console.log(arrIterator); //이름 Array Iterator -> 안에 value, done을 반환하는 next함수가 있다.

console.log(arrIterator.next());
