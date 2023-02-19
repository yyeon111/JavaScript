const strObj1 = new String(); //prototype string, object // 원시형도 prototype이 있다. global object<wrapper object 나타남
const strObj2 = new String('Hello World!');

console.log(strObj1);
console.log(strObj2);

console.log(strObj1.valueOf(), strObj1.toString()); // toString prototype string, object
console.log(strObj2.valueOf(), strObj2.toString()); //valueOf 원시값을 알려준다. PrimitiveValue

const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]); //배열도 문자열로 반환 가능
const fromObj = new String({a: 1}); //객체도 문자열로 반환 가능

console.log(typeof fromNum, fromNum); //객체를 문자열로 변환 가능하다.
console.log(typeof fromBool, fromBool);
console.log(typeof fromArr, fromArr); //배열을 문자열로 변환할 때 문자를 다 묶어서 하나로 변환.
console.log(typeof fromObj, fromObj); //객체를 문자열로 변환할 때 object object로 변환 이상해짐. 사용하지 말것.

console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());

//생성자 new없이 그냥 String은 문자열로 반환. //내장함수  built-in
const str1 = String('Hello World!');
const str2 = String(123);
const str3 = String(true);
const str4 = String({x: 1, y: 2}); // 💡 [object Object]
const str5 = String([1, 2, 3]); // 💡 1,2,3

console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3);
console.log(typeof str4, str4);
console.log(typeof str5, str5);

let myStr = '안녕하세요!'; //유사 배열 객체, 배열과 비슷한 특징. for of문 사용 가능. 이터러블 이기 때문에.

console.log(
  myStr.length,
  myStr[0],
  myStr[myStr.length - 1]
);

//string은 객체인척 순간 변하는 것이지 실제는 원시값이다. 그래서 인덱스를 통해 부분 수정 불가능하다. 통째로 대체해야 한다.