//매개변수 갯수를 넘어가는 인수는 무시가 된다.
//arguments 배열은 아니지만 '배열의 형태'를 하고 있다. => 전달된 모든 인수들 
function add(a,b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add(1, 3, 5, 7)
); //1,3,5,7이 다 arguments[]로 들어온다.retrun은 parameters에 있는 값만 된다.

//arguments는 parameters로 안써도 된다.
//arguments는 iterable이기 때문에 for of를 돌 수 있다.
function getAverage(){ //1,4,7로 실행하는 것이 아니기 때문에 안써도됨
  let result = 0;
  for(const num of arguments){
    result += num;
  }
  return result/arguments.length;
}

console.log(
  getAverage(1,4,7),
  parseInt(getAverage(24,31,52,80))
  );

  // ♻️ 새로고침 후 실행
const add = (a, b) => a + b; //전달받은 값으로 계속 처리
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function combineArms () {
  return (x, y) => { //반환되는 함수에 8,3을 넣어준다.
    let result = x;
    for (const arm of arguments) { //전달받은 함수를 돌며 실행한다.
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
}

const add_mul = combineArms(add, mul, 1, true);
const add_mul_sub = combineArms(add, mul, sub);
const add_mul_sub_div = combineArms(add, mul, sub, div);

// 💡 익명 함수 사용됨
const add_mul_sub_div_pow
  = combineArms(add, mul, sub, div, (x, y) => x ** y);

  console.log(
    add_mul(8, 3),
    add_mul_sub(8, 3),
    add_mul_sub_div(8, 3),
    add_mul_sub_div_pow(8, 3)
  );

  //rest parameters 와 arguments의 차이
  //arguments는 인자를 전부 볼 수 있고, 배열 형태이다
  //rest parameters는 인자로 받고 남은 인자들을 실제 배열로 보여준다.
  const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

function doMultiArms (x, y, ...arms) {
  let result = x;
  for (const arm of arms) {
    if (typeof arm !== 'function') continue;
    result = arm(result, y);
  }
  return result;
}

console.log(
  doMultiArms(8, 3, add, mul, 1, true), // arms는 add, mul, 1, true가 된다.
  doMultiArms(8, 3, add, mul, sub),
  doMultiArms(8, 3, add, mul, sub, div),
  doMultiArms(8, 3, add, mul, sub, div, (x, y) => x ** y)
);