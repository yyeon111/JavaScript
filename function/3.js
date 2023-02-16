// class YalcoChicken{
//   constructor(name,no){
//     this.name = name;
//     this.no = no;
//   }
//   introduce(){
//     return `안녕하세요, ${this.no}호 ${this.name}점 입니다!`;
//   }
// }
// const chain1 = new YalcoChicken('판교',3);
// console.log(chain1);

//ES6로 만든것은 엄격모드 이기 때문에 문법대로 사용안하면 오류가 발생한다
//생성자 함수는 new를 붙이지 않으면 그냥 undefined였는데, class는 오류를 반환한다.
//class안에 함수는 prototype안에 생성된다. 생성자 함수는 인스턴스 자체가 함수를 갖고있다.
//constructor은 프로퍼티 초기설정 역할, 초기값 있을 시에는 constructor 생략 가능하다.
class Slime{
  hp = 50;
  op = 4;
  attack(enemy){
    enemy.hp-+this.op;
    this.hp+=this.op/4;
  }
}
const slime1 = new Slime();
const slime2 = new Slime();

slime1.attack(slime2);
console.log(slime1,slime2);

//constructor과 consturctor없이 혼합해서 사용 예시
class YalcoChicken{
  no=0;
  menu={후라이드:10000,양념치킨:12000};
  constructor(name,no){
    this.name = name;
    if(no) this.no = no;
  }
  introduce(){
    return `안녕하세요. ${this.no}호 ${this.name}점 입니다!`;
  }
  order(name){
    return `${this.menu[name]}원 입니다.` //name은 기본 객체 만들어질 때 전달되지 않는다. 호출을 따로 해줘야한다.
  }
}

const chain0 = new YalcoChicken('(미정)');
console.log(chain0, chain0.introduce());
const chain1 = new YalcoChicken('판교',3);
// console.log(chain1, chain1.introduce());
console.log(chain1.order('양념치킨'));
chain1['menu']['양념치킨']=13000;
console.log(chain1.order('양념치킨'));

//정적변수와 메서드
//class자체에 변수와 메서드를 지정 할 수 있다. 앞에 static을 사용해 줘야함.
//인스턴스 따로 클래스 따로 메모리 공간 차지한다. //정적 메서드에서는 정적 필드만 사용 가능.
//생성자 함수에서도 정적 필드 메서드 있다. 걔네는  static안써도된다.
class Apple{
  static brand = '애플';
  static contact(){
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }
  constructor(name,no){
    this.name = name;
    this.no = no;
  }
  introduce(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

let a = new Apple('A애플',1);
console.log(a);
console.log(Apple['brand']);

//class도 함수이기 때문에 전달 될 수 있다.
class Dog{
  name = 'who';
  bark(){
    return '멍멍';
  }
}
const 개 = Dog;
const 바둑이 = new 개;
console.log(바둑이);