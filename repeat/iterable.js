console.log(
  [][Symbol.iterator]
);

//[Symbol.iterator] 라는 함수가 있다. -> iterator라는 객체를 만들어 내는 함수 -> 이 객체는 next라는 함수를 가지고 있다.

console.log(
  ''[Symbol.iterator]()
); //iterator 안에는 들어 갈 수가 없나? //체이닝으로만 가능
console.log(''[Symbol.iterator]().next()); 
//next를 실행 했을 때, value, done 을 담은 객체를 반환한다.
//[Sybol.iterator] function-> array iterator {next function: {value, done})}

const arr = [1, 'A', true, null, {x: 1, y: 2}, [1, 2, 3]];
const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator); //객체 내용x , 내부적 객체 반환하는 next함수 있음.
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next()); //이 자체가 반복문은 아니다. for of가 반복 되는 기능
//next가 false가 될 때 까지 for of가 도는 것.

//value, done을 설정 하고 반복문을 돌리면 false가 될 때 까지 반복하게 할 수 있다.
//보통 iterable은 요소를 돌기 때문에, 알고리즘을 지정 해서 반복 할 때 이터러블을 직접 만든다.

//이터러블 protocal가지고 있는 객체-> 이터러블 이라고 한다.
//이터러블 만들기
const diceTenTimes = {
  [Symbol.iterator](){
    let count = 0;
    let maxCount = 10;
    return {
      next(){ //done이 될 때 
        return{
          value: Math.ceil(Math.random() * 6),
          done: count++ >= maxCount  
        }
      }
    }
  }
}

//iterator에 접근가능 시작

//for of는 iterable을 자동 실행하고, next도 자동 실행 이 되서 return은 value다.

//for 문은 iterable이 자동 실행이 안된다. next가 자동 실행이 안된다.
//실행을 해야 객체가 비로소 생기고, next를 실행 해줘야  value, done의 객체를 얻을 수 있다.
const diceIterator = diceTenTimes[Symbol.iterator]();
//한번만 실행하면 됨, 객체를 만듬
for (let i = 0; i < 12; i++) {
  console.log(
    diceIterator.next()['value'] //만들어진 객체에서 일일이 next를 실행 해 줘야함.
  );
}

//for of는 이터러블만 사용 가능 하며, 자동 실행 기능이 있다.
for(const num of diceTenTimes){
  console.log(num);
}

//iterable에 사용 되는 문법들은 알아서 내부적으로 실행
const diceResults = [...diceTenTimes];
console.log(diceResults);
console.log(diceResults);


//디스트럭처링 사용
//[배열 안에 스프레드 있으면 배열로 결국 배열로 덮음]
//[]배열로서 아닌 다수로서 사용
const tempArr = [1, 'JavaScript', 'Node.js', 'Java']
const [no, name, ...rest] = tempArr;
console.log(
  no, name, rest
);

const [first, second, ...rest1] = diceTenTimes;

console.log(
  '주사위의 첫번째, 두번째 숫자는 각각 '
  + `${first}와 ${second}, 나머지의 합은 ${rest1.reduce((a, b) => a + b)} 입니다.`
);

//스프레드 할 경우, 값을 복사 하는 것x 값을 참조 하는 것, //그래서 원본 데이터의 프로퍼티에 접근이 가능하다.
const test = [{
  name: 'nora',
  age: 20,
  reigon: '서울',
  major: 'English'
},
{
  name: 'shin',
  age: 32,
  reigon: '안양',
  major: 'sports'
}]

const spreadTest = [...test];
console.log(spreadTest);
console.log(spreadTest[name]); //객체 접근 안됨
const testValue = spreadTest.forEach(i => console.log(i.name));
spreadTest.map(i => console.log(i.name));

//iterable객체를 만드는 방법
//인자를 받기 위해 함수로 작성 법

//이터레이터를 자기 자신을 반환함으로써 next호출 => 블록문 안에 있는 것이 아니기 때문에 next가 반복 실행되지 않는다.
function workersIter (people) {
  let idx = 0;

  return {

    [Symbol.iterator] () {
       return{
         next () {
         return {
         value: people[Math.min(idx, people.length - 1)],
         done: idx++ >= people.length
         }
        }
       }
    }
  }
}

// 이터러블로 사용
// 인원 명단 확인
const team1 = [
  '철수', '영희', '돌준', '미나', '준희'
];
let workersIter1 = workersIter(team1); //객체가 담김 -> symbol이 있는

console.log(
  [...workersIter1]
);

console.log(
  [...workersIter1]
);
console.log(
  [...workersIter1]
);

//이터레이터를 가진 이터러블 객체를 만듬
//이터러블을 가지고 이터레이터 기능 -> 그냥 for 문이나 of문을 돌려도 되는데 굳이만듦..원리만 파악하기
//함수기 때문에 한번밖에 실행 못함. 계속 실행 해 줘야한다.
// 새로 생성해야 다시 순회
// workersIter1 = workersIter(team1);

// console.log(
//   [...workersIter1]
// );

//이터러블 문법 사용하지 않으면 자동 실행은 되지 않는다.
// 이터레이터로 사용
// 인원 순번 넘기기
function switchWorker(iter) {
  const next = iter[Symbol.iterator]().next();
  console.log(
    next.done
    ? '-- 인원 없음 -- '
    : `${next.value} 차례입니다.`
  );
}

let workersIter2 = workersIter(team1);
switchWorker(workersIter2); // ⭐ 반복 실행해 볼 것