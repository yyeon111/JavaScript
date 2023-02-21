//Date 생성자 함수.
//wrapper Object와 다른 속성
const testDate = Date();
console.log(typeof testDate); //new를 작성하지 않으면 현재 날짜가 string으로 반환

//object를 String으로 바꾸기 위해서 String함수, toString메서드 사용하면 된다.
const date1 = new Date();
const stringTest = String(date1);
console.log(stringTest);
const toStringTest = date1.toString();
console.log(toStringTest);
console.log(date1);
//String, toString으로 변환시 문자열로 반환 -> 브라우저 콘솔과 에디터 값 같음
//new Date() 생성 시 에디터와 브라우저에서 다르게 표기됨

//UTC 협정 세계 시 = 국제 표준시 Universal Time coordinated
//1970년 1월1일 부터 인자로 받은 날까지 카운팅 해서 반환해줌.
console.log(new Date(0)); 
//콘솔에서는 
console.log(new Date(1000 *60*60*24*365*30));