//this 함수를 어떻게 호출하냐에 따라서 this가 가리키는 대상이 달라진다.
//함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는 연결점의 역할을 한다.
//함수가 소속되어 있는 객체를 가르킨다.
//바로  this===window 이고, 함수안에서 this는 객체를 가르킨다.

//생성자 함수를 만들 때의 this는 만들어진 객체를 가리킨다.
//아직 할딩돠지 않았기 때문에 생성자에서 if문에서  this를 검사 할 수 없다.

//Object

let sum2 = new Function('x','y','return x+y');
console.log(sum2);

//리터럴 new를 사용해서 객체를 만드는 것은 복잡하다. 그래서 간단하게 객체를 만들 수 있는 방법을 리터럴이라고 한다.
//function도 사실은 객체를 만드는 것이다.

function sum(x,y){
  return x+y;
}
console.log(sum(1,2)); // sum 이라는 객체를 만들었다. 함수 리터럴 객체들은 프로퍼티를 가질 수 있다.

const person = {name:'Nora',age:30}; //객체 리터럴