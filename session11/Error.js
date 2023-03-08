// const error = new Error('뭔가 잘못됐어');
// console.error(error);
// console.log(error); //try catch -> 에러 표현 방법 (Error 키워드 대신 들어감)
// //new Error => 객체를 생성해서 던지는 법 (에러 메세지를 지정 가능)

// //프로퍼티 생김
// const error1 = new Error(//에러 name => Error
//   '뭔가 잘못됐어', //에러 message
//   { cause: '뭘 잘못했으니까'} //에러 cause
// );
// console.error(error1); // name, message만 뜸
// console.log(error1.toString()); //name, message string으로 나옴

// //에러 발생 안해도 고의로 에러 던지기
// throw new Error('이유를 묻지 마라');

//발생한 error는 errortype의 인스턴스로 분리된다.
//에러타입에 따라 대처하기
const errorFuncs = [
  () => {(3).split('');},
  () => {hello();},
  () => {(123.45).toFixed(-1);}
];

//return 콜백함수만 끝내고, forEach는 남아있다.
errorFuncs.forEach(func => {
  try{
    func();

  } catch (e) {
    if(e instanceof TypeError) {
      console.error('자료형 확인하세요.');
      return; //return안쓰면 하나로 밑에까지 다돈다.
    }
    if(e instanceof ReferenceError){
      console.error('선언 안 된거 쓴 거 없는지 확인하세요.');
      return;
    }
    console.error('아니, 뭘 한 거예요?'); 
    
  }
});
//생성자 함수(객체로서 존재) -> 관련 인스턴스 만들 수 있다.
//오류, 오류타입들 생성자 함수, 객체로서 존재 => 관련 인스턴스 만들 수 있다.
// const test = new TypeError('test type error');
// console.error(test);

function applyForMonth (date) {
  try{
    if (typeof date !== 'number') {
      throw new TypeError('숫자로 입력해주세요.');
    }
    if (date < 1 || date > 12) {
      throw new RangeError('유효한 월을 입력해주세요.')
    }
    console.log(`${date}월 당번으로 등록되셨습니다.`);
  } catch (e) {
    console.error('❗에러 발생', e);
    console.log('다시 등록해주세요.');
  }
}
applyForMonth(5);
applyForMonth('5');
applyForMonth(13);
