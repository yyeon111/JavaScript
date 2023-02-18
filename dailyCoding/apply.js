//함수가 객체다아아아아

let sum2 = new Function('x','y','return x+y');
console.log(sum2);

//리터럴 new를 사용해서 객체를 만드는 것은 복잡하다. 그래서 간단하게 객체를 만들 수 있는 방법을 리터럴이라고 한다.
//function도 사실은 객체를 만드는 것이다.

function sum(x,y){
  return x+y;
}
console.log(sum(1,2)); // sum 이라는 객체를 만들었다. 함수 리터럴 객체들은 프로퍼티를 가질 수 있다.

const person = {name:'Nora',age:30}; //객체 리터럴 

// 객체와 메소드는 붙어있다. sum도 객체이기 때문에 관련된 메소드들을 사용 할 수 있다.
// 그중 하나가 apply. function method = 객체 지향

// apply를 통해 this가 가리키는 객체를 변경 해 줄 수 있다.