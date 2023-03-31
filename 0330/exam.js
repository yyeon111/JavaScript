function iterable (maxCount) {
  // let count = 0;
  return {
    [Symbol.iterator] () {
      let count = 0;
      return {
        next() {
          return {
            value: Math.ceil(Math.random()*5), done: count++ >= maxCount
          }
        }        
      }
    }
  }
}
const obj = iterable(10);
console.log([...obj]);

function* generator (maxCount) {
  let count = 0;

  while(count++ <= maxCount) {
    yield Math.ceil(Math.random() * 6);
  }
}

const obj2 = generator(10);
console.log([...obj2]);

// yield Math.ceil(Math.random() * 6);

function* workersGen (people) {
  let idx = 0;

  while (idx < people.length) {
    yield people[idx++];
  }
}

const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];

// 이터레이터로 사용
// 인원 순번 넘기기
function switchWorker(iter) {
  const next = iter.next();
  console.log(
    next.done
    ? '-- 인원 없음 -- '
    : `${next.value} 차례입니다.`
  );
}

workersIter1 = workersGen(team1);

switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);
switchWorker(workersIter1);