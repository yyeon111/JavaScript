const errorFuncs = [
  () => {(3).split('');},
  () => {hello();},
  () => {(123.456).toFixed(-1);}
];

errorFuncs.forEach(func => {
  try{
    func();
  } catch (e) {
    if (e.name = TypeError) {
      console.error('자료형을 확인하세요.', e);
      return;
    }
    if (e instanceof ReferenceError){
      console.error('선언 안 된 거 사용 했는지 확인하세요.', e);
      return;
    }
    console.error('원인을 알 수 없는 에러입니다.', e)
  }
})

function vacation (date) {
  try {
    if(typeof date !== 'number') {
      throw new TypeError('숫자로 입력하세요.');
    }
    if(date < 1 || date > 12) {
      throw new RangeError('유효한 월을 입력하세요.');
    }
    console.log(`${date}월 휴가신청이 정상적으로 등록되었습니다.`);
  } catch (e) {
    console.error('에러발생', e);
    console.log('다시 입력해주세요.');
  }
}

vacation('삼');
vacation(13);
vacation(2);