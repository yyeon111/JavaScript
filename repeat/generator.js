// //함수 내에 있는 코드들
// function* genFunction () {
//   console.log('하나를 반환합니다.');
//   yield '하나'; //value

//   console.log('둘을 반환합니다.');
//   yield '둘';

//   console.log('셋을 반환합니다.');
//   yield '셋';
// }

// const genFunc = genFunction();
// //함수 호출 한번만 가능 -> 제어권을 준다. -> yield 만날 때 까지 실행. next로
// //yield에 있는 게 value로 가고, next를 실행 했기 때문에 value, done이 들어간 객체를 반환.


// // // 반복 수행해 볼 것
// // // 💡 아래의 코드가 블록의 코드에 대한 제어권을 가짐
// console.log( genFunc.next() );
// console.log( genFunc.next() );


function* genFunction () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
// //일반 실행 -> 함수 실행, next 실행 -> yeild하나만 

// //바로 next와 Symbol.iterator() 를 가지고 있다.
// //generator를 통해서 iterable, iterator를 가진 객체가 생성된다.
let genObj = genFunction(); //함수 실행 필요
// // 로그 펼쳐서 살펴볼 것
console.log( genObj );
//어처피 할 때 마다 함수 실행해야함
console.log([...genObj]);
console.log([...genObj]); //함수 재 실행 필요
// console.log([...genObj]);  //스프레드 이기 때문에 next다 전부 실행 yield 끝까지 간다.
// //yield가 value이다.
//이터러블로서는 자동 전체 실행한다. -> value만을
//일반 자동 실행안됨 -> {value, done}의 객체를
// 이터러블로서는 바로 호출이 적합
console.log([...genFunction()]); //안정적
console.log([...genFunction()]);

for (const num of genFunction()) {
  console.log(num);
}

genObj = genFunction(); // 재생성

// 💡 이터레이터임 확인
console.log( genObj.next );

// for (let i = 0; i < 7; i++) {
//   console.log(genObj.next());
// }

for(let i = 1; i<=10; i++){
  console.log(Math.ceil(Math.random()*6));
}

//순환 한번밖에 되지 않는다.
//while로 done 조절

function* workerGen (people){
  let idx = 0;

  while(idx < people.length){
    yield people[idx++];
  }
}

const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];

console.log(
  [...workerGen(team1)]
);

function switchWorker(iter){
  const next = iter.next();
  console.log(
    next.done
    ? '---인원없음---'
    : `${next.value}차례입니다`
  );
}

workersIter1 = workerGen(team1);
switchWorker(workersIter1);
switchWorker(workersIter1);