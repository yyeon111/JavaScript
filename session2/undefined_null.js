//반환 : 값을 바꿔서 사용 할 수 있다.
console.log(1+2); //반환 3이 된다.

//console.log는 데이터를 보여주는 것 뿐이다. 반환하는 코드가 아님.
//반환되는게 없으면 undefined가 된다.
let x = 1; 
console.log(x) // 1,undefined 반환되는게 없음, 그냥 x는 1이다.
//null은 의도적으로 없음을 나타낸다.
//null의 typeof는 초기 잘못된 설계로 object인데, 변수가 null인지 object인지 typeof로 확인 할 수 없다. 둘다 object라고 알려주기 때문. 이럴 때 연산자를 사용해서 알 수 있다.
let y = null;
console.log(y);
console.log(y===null); // 값 자체도 null이고 type도 null인지 확인을 통해 알 수 있다.