// //상속 inheritnace
// //서로 다른 클래스나 생성자 함수가 같은 속성들을 공ㅇ유 할 때 부모 자식 클래스 생성 extends사용

// class Bird{
//   wing = 2;
// }
// class Eagle extends Bird{
//   claws = 2;
// }
// class Penguin extends Bird{
//   swim(){console.log('수영중...');}
// }
// class EmperorPenguin extends Penguin{
//   size = 'XXXL';
// }

// const birdy = new Bird();
// const eaglee = new Eagle();
// const pengu = new Penguin();
// const pengdol = new EmperorPenguin();

// console.log(birdy, eaglee, pengu, pengdol);

// pengu.swim();
// pengdol.swim();
// eaglee.swim();

//오버라이딩 overriding
//자식이여도 부모의 속성을 덮어쓸 수 있다.
// class Bird {
//   wings = 2;
//   canFly = true;
//   travel () { console.log('비행중...') }
// }
// class Eagle extends Bird {
//   claws = 2;
// }
// class Penguin extends Bird {
//   canFly = false;
//   travel () { console.log('수영중...') }
// }

// const eaglee = new Eagle();
// const pengu = new Penguin();

// console.log(eaglee);
// eaglee.travel();
// console.log(pengu);
// pengu.travel();

// //super 부모클래스의 constructor또는 메서드 호출
// class YalcoChicken {
//   no = 0;
//   menu = { '후라이드': 10000, '양념치킨': 12000 };

//   constructor (name, no) {
//     this.name = name;
//     if (no) this.no = no;
//   }
//   introduce () {
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
//   order (name) {
//     return `${this.menu[name]}원입니다.`
//   }
// }
// const test = new YalcoChicken('간석',10);

// class ConceptYalcoChicken extends YalcoChicken {
//   #word = '';
//   constructor (word) {
//     // super(name, no); //super을 사용하면 부모클래스의 constructor과 메서드가 호출 되 사용 할 수 있다.
//     this.#word = word;
//   }
//   introWithConcept () {
//     return super.introduce() + ' ' + this.#word;
//   }
//   order (name) {
//     return super.order(name) + ' ' + this.#word;
//   }
// }

// const pikaChain = new ConceptYalcoChicken('피카');

// // console.log(pikaChain);
// // console.log(pikaChain.introWithConcept());
// // console.log(pikaChain.order('후라이드'));
// // console.log(test);
// // console.log(pikaChain.introduce());

class YalcoChicken {
  static brand = '얄코치킨';
  static contact () {
    console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
  }
}

class ConceptYalcoChicken extends YalcoChicken {
  static contact () { //concepYalco에 static 메소드 설정
    super.contact();//부모의 contact가져올것 
    console.log('컨셉 가맹문의는 홈페이지를 참조하세요.'); //concept에 추가할 내용
  }
}

ConceptYalcoChicken.contact();