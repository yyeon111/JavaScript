function* genFunction () {
  console.log('하나를 반환합니다.');
  yield '하나';

  console.log('둘을 반환합니다.');
  yield '둘';

  console.log('셋을 반환합니다.');
  yield '셋';
}

const made = genFunction() //호출하면 next함수 사용할 수 있음
made.next(); //첫번 째 yield 만날 때 까지 실행  => 보려면 cosole.log 하면 {value, done} 볼 수 있음
console.log(made.next());
console.log(made.next());
console.log(made.next());


// genFunction().next(); //value, done이 생긴 상태 
// console.log(genFunction().next());
// console.log(genFunction().next());
// console.log(genFunction().next());//계속 한번 실행한 걸로됨

// const genFunc = genFunction();
// // 반복 수행해 볼 것
// // 💡 아래의 코드가 블록의 코드에 대한 제어권을 가짐
// console.log( genFunc.next() );