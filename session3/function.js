// 일급객체
// 함수를 값 같이 다루는 언어
// function의 typeof은 function
// 함수도 객체이다.
// 함수도 할당이 될 수 있다. 인자로 전달 될 수 있다. 다른 함수의 결과값으로서 변환될 수 있다.


function isOddNum(number){
  console.log(
    (number % 2 ? '홀':'짝')
    + '수입니다.'
  );
  return number % 2 ? true:false; 
};
const checkIfOdd = isOddNum; //=> 호출() 하면 retrun이 반환되지만, 여기선 함수자체를 할당했다.
console.log(checkIfOdd(23));

//객체와 배열의 값으로도 할당 가능하다.
let person = {
  name:'홍길동',
  age:30,
  married:true,
  introduce:function(formal){ //무명함수이지만, introduce가 이름의 역할을 한다.
    return formal
    ? '안녕하십니까. 홍길동 대리라고 합니다.'
    : '안녕하세요, 홍길동이라고 해요.'
  }
};
console.log(person.introduce(true));
console.log(person.introduce(false));

//배열안에 들어간 함수
let arithmetics = [
  (a,b) => a+b,
  (a,b) => a-b,
  (a,b) => a*b,
  (a,b) => a/b,
];

for(arm of arithmetics){
  console.log(arm(5,3));
} //for문 돌고 함수호출은 요소로 한다.

//객체안에서 함수를 만들 때, 객체 안에 있는 프로퍼티를 사용 할 때가 있다. 
let people = {
  name:'홍길동',
  age:30,
  married:false,
  introduce:function(){
    return `저는 ${this.name}, ${this.age}살이고 \n ${this.married ? '기혼':'미혼'}입니다.`
  } //화살표함수 절대 불가!
}
console.log(people.introduce());

//인자로 전달
//전달 받는 함수 = 고차함수
//전달 되는 함수 = 콜백함수
//console.log도 함수이다.

let list = [1,2,3,4,5];

function doInArray (arry,func){
  for(item of arry){
    func(item);
  }
}
doInArray(list,console.log);

//함수는 무조건 인자 부분을 정의 해 줘야한다.
function doNTimes(func, repeat, x, y){
  let result = x;
  for(i=0; i<repeat; i++){
    result = func(result,y);
  }
  return result;
}

console.log(
  doNTimes((x,y)=>x*y,3,5,2), //한번 인자로 전달하고 말 함수이기 때문에 익명함수를 써도 된다.
  doNTimes((x,y)=>x/y,3,5,2)
);

//함수 두개 사용해보기

//calculate
// const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;

//evaluate
const isOdd = (number) => !!(number % 2)
const isPositive = (number) => number > 0;

function calcAndEval (calc, eval, x, y){
  return eval(calc(x,y));
}
console.log(
  // calcAndEval(add,isOdd,5,7),
  calcAndEval(subtract, isPositive, 5, 7),
  calcAndEval(multiply,isOdd,5,7)
);

//결과값으로 반환 제발 외워제발
//인자를 받아서 그거에 따라 내보낼 함수가 달라진다.

function getIntroFunc(name, formal){
  return formal
  ? function(){
    console.log(`안녕하십니까, ${name}입니다.`)
  } : function(){
    console.log(`안녕하세요~ ${name}이라고 해요.`)
  }
}
const hongIntro=getIntroFunc('홍길동',true); //결과 값을 반환하는게 아니라 함수를 반환하는 거기 때문에
const JeonIntro=getIntroFunc('전우치',false);
hongIntro();
JeonIntro();

//함수에 전달할 인자, return될 함수에 전달할 인자
const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;

function comb3ArmFuncs(armFunc1,armFunc2,armFunc3){
  return (x,y) => armFunc3(armFunc2(armFunc1(x,y),y),y);
}

const add_mul_sub = comb3ArmFuncs(add,mul,sub); // 함수가 반환되기 때문에 넣어주는 것
const mul_add_div = comb3ArmFuncs(mul,add,div); //밖에 함수가 전달받을 인자
const div_add_mul = comb3ArmFuncs(div,add,mul);

console.log(
  add_mul_sub(10,4), //안에 있는 함수가 전달받을 인자
  mul_add_div(10,4),
  div_add_mul(10,4)
);