console.log(
  [][Symbol.iterator],
  ''[Symbol.iterator],
  new Set()[Symbol.iterator],
  new Map()[Symbol.iterator]
);

console.log(
  [][Symbol.iterator](),
  ''[Symbol.iterator](),
  new Set()[Symbol.iterator](),
  new Map()[Symbol.iterator]()
);

const arr = [1, 'A', true, null, {x: 1, y: 2 }];
const arrIterator = arr[Symbol.iterator]();

// 펼쳐서 메서드 살펴볼 것
console.log(arrIterator);

const diceTenTimes = {
  // ⭐️ 아래의 메서드를 갖는 것이 이터러블 프로토콜
  [Symbol.iterator] () {
    let count = 0;
    let maxCount = 10;
    
    // ⭐️ 이터레이터(next 메서드를 가진 객체)을 반환
    return {
      next () {
        return {
          value: Math.ceil(Math.random() * 6),
          done: count++ >= maxCount
        }
      }
    }
  }
}

const diceIterator = diceTenTimes[Symbol.iterator]();

// for (let i = 0; i < 12; i++) {
//   console.log(
//     diceIterator.next()
//   );
// }
// 💡 for ... of 문 사용 가능
for (const num of diceTenTimes) {
  console.log(num);
} //호출, next하지 않아도 가능 value에 접근

const str = 'apple'; // 이터레이터에서 계속 호출 해야한다.
const iterator = str[Symbol.iterator]();
for(let i = 0; i<str.length+1; i++) {
  console.log(iterator.next());
}

// 💡 스프레드 문법 사용 가능
const diceResults = [...diceTenTimes];

console.log(diceResults);

// 💡 배열 디스트럭쳐링 사용 가능
const [first, second, ...rest] = diceTenTimes;

console.log(
  '주사위의 첫번째, 두번째 숫자는 각각 '
  + `${first}(와)과 ${second}, 나머지의 합은 ${
    rest.reduce((a, b) => a + b)
  } 입니다.`
);

function fiboIterator () {
  let count = 0;
  const maxCount = 10; // 최대 횟수가 지정됨
  let [x, y] = [0, 1];

  return {
    next () {
      [x, y] = [y, x + y];
      return { value: y, done: count++ >= maxCount }
    }
  }
}
const fibonacci = {
  [Symbol.iterator]: fiboIterator
}
for (num of fibonacci) {
  console.log(num);
}

function getFiboWithMax (maxCount) {
  return {
    [Symbol.iterator] () {
      let count = 0;
      let [x, y] = [0, 1];

      return {
        next () {
          [x, y] = [y, x + y];
          return { value: y, done: count++ >= maxCount }
        }
      }
    }
  }
}

const fiboMax5 = getFiboWithMax(5);
const fiboMax20 = getFiboWithMax(20);

console.log([...fiboMax5]);
console.log([...fiboMax20]);
console.log([...fiboMax5]);
console.log([...fiboMax5]);
console.log([...fiboMax5]);

function workersIter (people) {
  let idx = 0;

  return{
    // 💡  이터레이터로서 [스스로]를 반환!
    // 사장: 직원은 나다.
    [Symbol.iterator] () { return this; },

    // 직원의 역할
    next () {
      return {
        value: people[idx],
        done: idx++ >= people.length
      };
    }
  }
}
// 이터러블로 사용
// 인원 명단 확인
const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];
let workersIter1 = workersIter(team1);

console.log(
  [...workersIter1]
);
// ⚠️ 이터레이터를 겸하는 경우 한 번 순회하면 끝
console.log(
  [...workersIter1]
);