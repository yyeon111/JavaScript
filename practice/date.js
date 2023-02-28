// const now = new Date(); //object //컴퓨터상 시간
// // 에디터랑 브라우저에서 찍히는 형식이 다름
// //어디서 실행 할 프로그램인지 염두하면서 코드 짜야한다.
// console.log(typeof now);
// console.log(now);

// const nowStr = Date() //string
// console.log(typeof nowStr);
// console.log(nowStr);

// console.log( //1970대로 초기화
//   new Date(0)
// );
// console.log(
//   new Date(1000 * 60 * 60 * 24 * 365 * 30)
// );
// //set
// console.log(new Date(2022, 8)); // default 연 월
// console.log(new Date(2022, 8, 20, 14, 35)); //일, 시, 분
// console.log(new Date(2022, 8, 20, 14, 35, 47, 789)); //초, 밀리초

// //Date.now() 인자의 경과 시간
// console.log(Date.now()); // utc 1970 부터 지금까지 밀리초 
// console.log(new Date(Date.now()));

// //인자를 밀리초로 반환
// //인자 월일, 년, 시간 UTC 
// //인자 월일, 년, 9시간 인자로 하면 인자 날짜만큼의 경과 밀리초 반환
// //Parse는  dateString, UTC는 단위별 숫자를 받음.
// console.log(
//   Date.parse('Febuary 28, 2023 09:00:00') //월 일, 년, 시, 분, 초
// );
// console.log(new Date( Date.parse('Febuary 28, 2023 09:00:00')));
// console.log(Date.UTC(2023, 1, 28, 0, 0, 0)); //연 월 일 시 분 초 월->0부터 시작

// //toString

// const test = new Date();
// console.log(test.toString()); //Date instance 날짜 출력

// console.log(test.toDateString()); //날짜만

// console.log(test.toTimeString()); //시간만

// //주어진 언어코드로 표현한 문자열 반환 toLocaleString
// //인자 없을 시 시스템 언어 적용
// console.log(test.toString());
// console.log(test.toLocaleString());
// console.log(test.toLocaleString('ko-KR'));
// console.log(test.toLocaleString('en-US'));
// console.log(test.toLocaleString('de-DE'));

// //단위별 getter, setter 메서드들
// // for(i of [
// //   console.log(test.getFullYear()),
// //   console.log(test.getMonth()),
// //   console.log(test.getDate()),
// //   console.log(test.getDay()),
// //   console.log(test.getHours()),
// //   console.log(test.getMinutes()),
// //   console.log(test.getSeconds()),
// //   console.log(test.getMilliseconds())
// // ]){
// //   console.log(i[0], i[1]);
// // }

// // for (i of [
// //   [ '연:', test.getFullYear() ],
// //   [ '월:', test.getMonth() ], // 0 ~ 11
// //   [ '일:', test.getDate() ],
// //   [ '요일:', test.getDay() ], // 0부터 일월화수목금토 
// //   [ '시:', test.getHours() ],
// //   [ '분:', test.getMinutes() ],
// //   [ '초:', test.getSeconds() ],
// //   [ '밀리초:', test.getMilliseconds() ]
// // ]) {
// //   console.log(i[0], i[1]);
// // }

// test.setFullYear(2023);
// test.setMonth(1);
// test.setDate(28);
// test.setHours(13);
// test.setMinutes(27);
// test.setSeconds(0);
// test.setMilliseconds(0);
// console.log(test.toString()); //요일없음

// console.log(new Date().getTimezoneOffset()/60); //utc와 우리나라 분단위 차이.

// const tt= new Date();

// // 시간차 존재
// console.log(
//   tt.toISOString() //ISO 8061 표기법으로 STRING -> utc 기준이기 때문에 시간이 다르다.
// );
// console.log(
//   tt.toString()
// );

// const test3 = new Date();
// const timezoneOffset = test3.getTimezoneOffset()*60000;
// console.log(timezoneOffset);

const now = new Date();
const timezoneOffset = now.getTimezoneOffset() * 60000;

const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();

console.log(isoStr);
console.log(now.toString());