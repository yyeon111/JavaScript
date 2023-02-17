// //class 상속

class Bird{ //부모클래스
  wings = 2;
}
class Eagle extends Bird{ //자식클래스
  claws = 2;
}
class Penguin extends Bird{
  swim(){console.log('수영중...')}
}
class EmperorPenguin extends Penguin{
  size = 'XXXL';
}

const birdy = new Bird();
const eaglee = new Eagle();
const pengu = new Penguin();
const pengdol = new EmperorPenguin();

console.log(birdy,eaglee,pengu,pengdol);

//자식이 부모와 같은 메서드를 사용하고 싶을 때 super을 사용해 주면 된다.