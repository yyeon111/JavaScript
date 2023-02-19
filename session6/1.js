//전역객체 global object
//코드로 선언하지 않았지만 전역범위에 항상 존재하는 객체
//브라우저에서의 this === window === self === frames this를 통해 전역객체가 window인 것을 확인
//node.js 파일에서의 this는 전역객체를 가르키지 않음.
//REPL 의 node에서 this는 전역객체를 가르킴
//node.js에서 전역객체를 보기위해선 global 을 하면 볼 수 있다. global을 통해 전역객체가
// console.log(global);
// console.log(globalThis); //node 파일, 브라우저 둘다 먹히는 방법
//브라우저와 노드js의 전역객체가 다르다.

//원시값 프로퍼티, 메소드도 갖고있다, 배열처럼 접근
// console.log(globalThis); //전역객체
// console.log(globalThis.Infinity);
// console.log(Infinity);
// console.log(globalThis.NaN);
// console.log(undefined);
// console.log(Object);
//편의를 위해서 전역객체를 쓰지 않는다.
// function func(){
// //   console.log('hi');
// // }
// // window.func(); //window에서의 전역객체 property 객체지향언어. 객체 안에 모든것이 소속되어 있다.
// //전역객체의 API => 전역객체에 표준화된 메소드

// //함수들 내가 지정하지 않았음에도 사용 할 수 있다.
// string method array method...object 
// //ES6부터는 단축 표현 함수만 메서드로 하기로 명칭이 바뀜.
// //메서드를 가지고 있지 않은 객체 = 표준 빌트인 객체 Infinity, NaN undefined Object => 전역객체에 포함, 호스트 객체(환경에서 제공하는 객체)

// 전역객체가 기본적으로 가지고 있는 프로퍼티가 있다. 즉 함수가 있다.
console.log(globalThis);
//표준빌트인 객체 = 자바스크립트 사양에 정의된 객체들. 어떤 환경에서든 사용 가능
//전역 프로퍼티로 제공된다. 
//Strung Number Boolean 선언하지 않았는데도 객체를 만들 수 있는 이유 표준 빌트인 객체에 속하기 때문이다. => 레퍼 객체라고 부른다.
//그런데 globalThis.isNaN 로 안하고 IsNaN로 호출해도 가능하다. 프로퍼티나 메서드를 갖고 있지 않다.

//원시값을 가지고 있는데 프로퍼티를 가지고 있다. 

//new가 붙는다는건 class나 생성자 함수라는 것 
//객체에 들어가 있는 기능들이 있다. length, toString()

//원시값에 대한 프로퍼티와 함수를 호출 할 수 있는 이유는, String, Number, boolean이라는 래퍼 객체가 나타나서 감싸준다. 그래서 객체가 가지고 있는 프로퍼티와 함수들을 사용 할 수 있는 것이다.

// const str = new String('abcd');
// console.log(str);

//prototype에 따른 메서드 있음

console.log(Number); //표준 빌트인 객체에 속하는 래퍼 객체

const hello = new String();
console.log(hello);

// const str = 'abcde';
// console.log(str.length); //여기서 래퍼객체 역할 하고 사라짐
// console.log(typeof str, str); //type은 string이다.

const str = new String('abcde');
const num = new Number(123.4567);
const bool = new Boolean(true);

console.log(str.valueOf()); //prototype에 따라 method가 있다. 궁극적인 prototype은 object이기 때문에 object의 method를 사용 할 수 있다.
console.log(num.valueOf());
console.log(bool.valueOf()); //인스턴스에서 원시값 반환.

//모든객체의 궁극적인 prototype은 objcet이다.