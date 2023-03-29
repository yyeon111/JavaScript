// function workersIter (people) {
//   return {
//     [Symbol.iterator](){
//       let idx = 0;
//       return {
//         next() {
//           return {
//             value: people[idx],
//             done: idx++ >= people.length
//           }
//         }
//       }
//     }
//   }
// }

// const team = ['철수', '영희', '돌준', '미나', '준희'];
// let workerIter1 = workersIter(team);
// console.log([...workerIter1]);
// console.log([...workerIter1]);

function workersIter(people) {
  let idx = 0;
  return {
    
    [Symbol.iterator] () {
      return this;
    },
    next () {
      return {
        value: people[idx],
        done: idx++ >= people.length
      }
    }
  }
}

const team = ['철수', '영희', '돌준', '미나', '준희'];
let workerIter1 = workersIter(team);
console.log([...workerIter1]);
console.log([...workerIter1]);

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

workersIter1 = workersIter(team);

switchWorker(workersIter1); // ⭐ 반복 실행해 볼 것
switchWorker(workersIter1); 