//변수가 접근 할 수 있는 범위 : 스코프
//변수가 안에서부터 밖으로 순차적으로 스코프에 접근 하는 것 : 스코프 체인 , 체이닝
//메모리 관점에서 데이터가 쌓이고 위에서부터 나가는 것 후입선출: 스택
//전역변수는 프로그램이 종료되면 소멸
//지역변수는 블록이스코프 실행이 종료되면 소멸 => 메모리 절약 

//if문 보다 함수를 사용하는 것이 가독성이 더 좋다.
function evalNum () {
  const x = 21;

  if (x % 2) {
    console.log('홀수입니다.');
    return;
  }

  if (x % 4) {
    console.log('짝수입니다.');
    return;
  }

  console.log('4의 배수입니다.');
}

evalNum();
console.log('블록문 바깥');

//true인지 먼저 검사를 거치지 않고, 평가할 대상만 넣어준다.
//switch문 -> 값과 평가가 일치하는 case로 이동.
//break와 같이 쓴다. break가 없으면 모든 case를 평가한다. 
const startMonth = 1;
let holidays = '분기 내 휴일:';

switch (startMonth) {
  case 1:
    holidays += ' 설날';
    break;
  case 2:
  case 3:
    holidays += ' 3•1절';
    break;

  case 4:
  case 5:
    holidays += ' 어린이날';
  case 6:
    holidays += ' 현충일';
    break;

  case 7:
  case 8:
    holidays += ' 광복절';
  case 9:
    holidays += ' 추석';
    break;

  case 10:
    holidays += ' 한글날';
  case 11:
  case 12:
    holidays += ' 크리스마스';
    break;

  default: 
    holidays = '잘못된 월입니다.';
    //마지막에 default값을 지정 해 줄 수 있다.
}

console.log(holidays);


//객체로도 사용 할 수 있다.
let option = 'name';
let fruits = {
  name:'apple',
  price:500,
}[option] ?? '해당사항없음'; // key가 있으면 key의 값을 반환, null이거나 undefined이면 '해당사항없음'으로 변환.
console.log(fruits);