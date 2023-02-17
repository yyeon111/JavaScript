function YalcoChicken(name,no){
  // brand = "얄코치킨";
  // contact = function(){
  //   return '000-000-0000';
  // }
  this.name = name;
  this.no = no;
  this.introduce = function(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다.`;
  };
}

const chain1 = new YalcoChicken('판교',3);
const chain2 = new YalcoChicken('강남',3);
const chain3 = new YalcoChicken('제주',3);

// YalcoChicken.brand = '얄코치킨';
// YalcoChicken.contact = function(){
//   return '010-000-0000';
// };
console.log(YalcoChicken.brand);

// console.log(YalcoChicken.brand);

// console.log(chain1, chain1.introduce()); //return을 해야 함수 반환이 된다.
// console.log(chain2, chain2.introduce());
// console.log(chain2, chain2.introduce());

// //생성자 함수를 통해 객체 생성, 함수를 통해 객체생성, 객체리터럴로 객체 생성
// //생성자 함수는 prototype으로 사후 관리가 가능하다. 생성자 함수 자체의 필드와 함수를 가질 수 있다.
// //생성자 함수로 만들어진 객체 앞에 생성자명이 붙고, prototype object, constructor 생성자명이 붙는다. 이것 때문에 사후 관리 가능하다.

// // YalcoChicken.brand = '얄코치킨';
// // YalcoChicken.contact = function(){
// //   return `안녕하세요 무엇을 도와드릴까요?`
// // };
// // console.log(YalcoChicken);
//class안에서 바로 지정 하는 것은 안된다. 나중에 추가적으로 추가 가능
//class에서는 static을 사용해서 바로 추가 가능


// //생성자 함수에 프로퍼티를 추가해도 이미 만들어진 객체에 추가 기능이 연동된다.

// YalcoChicken.prototype.introEng = function(){
//   return `hi!`;
// };
// console.log(chain1.introEng());