//이터러블 만들기

const diceTenTimes = {
  [Symbol.iterator] () {
    let count = 0;
    let maxCount = 10;

    return {
      next () {
        return {
          value: Math.ceil(Math.random()*6),
          done: count++ >= maxCount
        }
      }
    }
  }
}

const diceIterator = diceTenTimes[Symbol.iterator](); //return 되어 객체 array protocal이 들어감

for(let i = 0; i < 12; i++){
  console.log(
    diceIterator.next() //객체 리턴을 콘솔에 찍으면서 0-> 12까지 반복 //지정을 해줘야함
  );
} // for문을 돌렸을 때 시작과 끝을 지정 해 줘야 하는 이유 done이 되어도 계속 돔

//for문 안돌리면 value 하나, done 하나만 뜸
for(const num of diceTenTimes){
  console.log(num) //done이 될때까지 자동 실행, 요소 하나하나는 value를 뜻함
};

const diceResults = [...diceTenTimes];
console.log(diceResults); //done이 될 때까지 알아서 value를 찾음

const [first, second, ...rest] = diceTenTimes;

console.log(
  '주사위의 첫번째, 두번째 숫자는 각각'
  + `${first}와 ${second}, 나머지의 합은 ${rest.reduce((a,b)=>a+b)}입니다`
);

//이터러블, 이터레이터 분리
function fiboIterator(){
  let count = 0;
  const maxCount = 10;
  let [x, y] = [0, 1];

  return{
    next(){
      [x, y] = [y, x + y];
      return {value: y, done: count++ >= maxCount}
    }
  }
}
const fibonacci = { //알아서 추적
  [Symbol.iterator]: fiboIterator
}

for(const num of fibonacci){
  console.log(num);
}

function workersIter(people){
  let idx = 0;

  
}