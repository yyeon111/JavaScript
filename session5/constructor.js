// //객체지향 프로그래밍
// //함수 뒤에 대문자가 오면 생성자 함수라고 생각하면 된다.
// //함수를 통해 객체를 생성할 수 있다. 함수를 통해 만들어진 객체를 인스턴스라고 부른다.
// //생성자 함수에서는 메서드 정의 불가(function 없이 key값만 있는 함수), 객체리터럴, 클래스 에서 가능

// function YalcoChicken(name,no){
//   this.name = name;
//   this.no = no;
//   this.introduce = function(){
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
// }
// const chain1 = new YalcoChicken('판교',3);
// const chain2 = new YalcoChicken('강남',17);
// const chain3 = new YalcoChicken('제주',24);

// console.log(chain1, chain1.introduce());
// console.log(chain2, chain2.introduce());
// console.log(chain3, chain3.introduce());

// //생성자 함수의 프로토타입 prototype - 자바스크립트 객체지향의 중심
// //원래 자바스크립트는 class가 없고 prototype으로 되어 있었다.
// //다른 언어에서 class가 있기 때문에 자바스크립트에도 익숙 해 질 수 있도록 class기능을 최근에 추가한것이다.
// //그렇다면, prototype은 class에 비해 기능이 좋지 않은 것? 오래된것?
// //타 언어의 클래스와는 다르며 사용하기에 따라 더 강력하다.
// //prototype이라는 키워드와 함께 이미 만들어진 객체에 새로운 함수 추가 가능하다 이후 세션에서 보충 할 예정
// YalcoChicken.prototype.introEng = function(){
//   return `Welcome to Yalco Chicken at ${this.name}!`;
// };
// console.log(chain1.introEng());

// //생성자 함수 자체에 property 추가하기
// YalcoChicken.brand = '얄코치킨';
// YalcoChicken.contact = function(){
//   return `${this.brand}입니다. 무엇을 도와드릴까요?`;
// }

// console.log(YalcoChicken.contact());

// //new 생략 실수 방지하기

// function YalcoChicken (name, no) {
//   this.name = name;
//   this.no = no;
//   this.introduce = function () {
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }

//   if (!new.target) { // 이 부분을 지우고 다시 해 볼 것
//     return new YalcoChicken(name, no); //재귀함수
//   }
// }

// const chain4 = new YalcoChicken('판교', 3);
// const chain5 = YalcoChicken('강남', 17); //udefined

// console.log(chain4, chain5);


function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

function createYalcoChicken (name, no) {
  return {
    name, no,
    introduce () {
      return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
    }
  }
}

// 객체 리터럴
const chain1 = {
  name: '판교', no: 3,
  introduce: function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
};

// 객체 반환 함수
const chain2 = createYalcoChicken('강남', 17);

// 생성자 함수
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1 instanceof YalcoChicken);
console.log(chain2, chain2 instanceof YalcoChicken);
console.log(chain3, chain3 instanceof YalcoChicken);