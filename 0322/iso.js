//우리나라 시간으로 ISOString 

const today = new Date();
const offset = today.getTimezoneOffset() * 60000;

const kr = new Date(today.getTime()-offset).toISOString();
console.log(kr.toString());
//new Date +9
//iso -> -9
//gettimeoffset -> +9 추가
//밀리초 변환 now? or getTime()

