const strObj1 = new String();
const strObj2 = new String('Hello World!');
console.log(strObj1);
console.log(strObj2);


//valueOf, toString 메서드는 어느 prototype이든지 사용 가능한 메서드 이다.
const fromNum = new String(123);
const fromBool = new String(true);
const fromArr = new String([1, 'A', false]);
const fromObj =  new String({a: 1});

//생성자 함수를 통해 만들어지면 type은 인스턴스! object이다.
//constructor, prototype이 String이 된다.
//String 생성자 함수를 쓰게되면 String 형태로 변환되어 들어간다.
console.log(typeof fromNum, fromNum); 
console.log(typeof fromBool, fromBool); //true 문자열 그대로 들어간다.
console.log(typeof fromArr, fromArr);  // 쉼표까지 다 붙인 배열이 들어간다. '1,A,false'
console.log(typeof fromObj, fromObj); // 이상한 값이 들어간다. 'object Object'

console.log(fromNum.toString());
console.log(fromBool.toString());
console.log(fromArr.toString());
console.log(fromObj.toString());

// let myStr = '안녕하세요!';

// console.log(
//   myStr.length,
//   myStr[0],
//   myStr[myStr.length - 1]
// );
// myStr[myStr.length - 1] = '?';
// console.log(myStr); // 💡 배열과 달리 그대로

const name = {name :'hello'};
console.log(name['name'][0]);