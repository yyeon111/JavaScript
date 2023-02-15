//생성자 함수
//객체를 만드는 함수
function YalcoChicken(name,no){
  this.name = name;
  this.no = no;
  this.introduce = function(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`
  };
}
const chain1 = new YalcoChicken('판교',3);
const chain2 = new YalcoChicken('강남',17);
const chain3 = new YalcoChicken('제주',24);

console.log(chain1.introduce(),chain2.introduce(),chain3.introduce());

//생성자 함수 안에서는 메서드가 정의되지 않는다. 메서드는 객체 안에서만 가능한 것 클래스는 특별하게 가능
//class와 객체 안에서 사용되고 함수 단축된 메서드만 사용 가능하다.
//new를 붙이지 않으면 객체가 생성 자체가 안되는 것임, 오류가 발생하지 않고 undefined를 반환한다.

//객체를 반환하는 함수를 통해서도 객체를 만들 수 있는데 굳이 생성자 함수를 사용하는 이유
//이유 = prototype(원기)
//객채를 반환하는 함수
function createYalcoChicken(name,no){
  return {
    name,no,
    introduce(){
      `hi ${this.name}! no is ${this.no}!`;
    }
  }
}
const chain4 = createYalcoChicken('판교',3);
console.log(chain4);

//prototype은 객체가 만들어 진 이후에 prototype 키워드를 사용해서 기능을 추가해도 객체에 연결된다. 대신에  객체 자체에 있는 기능이 아니라, prototype이라는 키워드 안 constructor에 위치시켜진다.

YalcoChicken.prototype.introEng = function(){
  return `welcome to Yalco Chicken!`
};

console.log(chain1.introEng());

//인스턴스의 여부인지를 확인 할 수도 있다.
console.log(chain1 instanceof YalcoChicken);
console.log(chain4 instanceof YalcoChicken);

//생성자 함수 자체의 Property를 지정해 줄 수도 있다.
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function(){
  return `안녕하세요 ${this.brand}입니다. 무엇을 도와드릴까요?`;
};
console.log(YalcoChicken.contact());

//new 생략했을 때 재귀함수를 사용해서 방지 할 수 있다.
function Brand (name,no){
  this.name = name;
  this.no = no;
  this.introduce = function introduce(){
    return `안녕하세요 ${this.no},${this.name}입니다`;
  }
  if(!new.target){
    return new Brand(name,no); //인자로 받은 name과 no가 리턴되어 어처피 들어감
  }
}
const apple = new Brand('aaa',1818);
const LG = Brand('lll',1919);

console.log(apple,LG);
console.log(apple.introduce());