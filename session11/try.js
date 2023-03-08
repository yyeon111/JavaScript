// console.log('에러 발생 전');

// (3).split('');
// console.log('에러 발생 후');

console.log('에러 발생 전');

try{
  (3).split('');

} catch (e) { //오류 객체
  console.error('❗❗❗',e);
}

console.log('에러 발생 후');

const arr = ['ABC', '가나다', 123, '123'];

function getLetterArray (str) {
  try {
    return str.split('');

  } catch (e) {
    console.error('❗', e);
    return [];
  }
}

arr.forEach(i => {
  console.log(getLetterArray(i)) //인자로 전달한 값으로 함수를 돌릴 때만 return 가져온다.
});

function connect () {console.log('❤️', '통신 연결');}
function disconnect () {console.log('🤍', '통신 연결 해제');}
function sendArray (arr) {console.log('전송', arr);}

function sendStringAsArray (str) {
  connect(); //통신 연결

  try {
    sendArray(str.split('')); //전송, [A,B,C]
    return true; //[성공]

  } catch (e) {
    console.log('❗', e); 
    return false;

  } finally {
    disconnect();
    console.log('----------------'); //통신연결해제 -----------

  }
}

['ABC', '가나다', 123, '123'].forEach(i => {
  console.log(
    sendStringAsArray(i)
    ? '[성공]' : '[실패]', '\n\n'
  );
});


function a (num) {
  if(typeof num !== 'number'){
      throw new RangeError('숫자를');
  }
}

a('가');

// 특정 월의 당번으로 지원하는 함수
function applyForMonth (date) {
  try {
    if (typeof date !== 'number') {
      throw new TypeError('숫자로 입력해주세요.');
    }
    if (date < 1 || date > 12) {
      throw new RangeError('유효한 월을 입력해주세요.');
    }

    console.log(`${date}월 당번으로 등록되셨습니다.`);

  } catch (e) {
    console.error('🛑 에러 발생!', e);
    console.log('다시 등록해주세요.');
  }
}