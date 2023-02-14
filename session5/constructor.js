function YalcoChicken(name,no){
  this.name = name;
  this.no = no;
  this.introduce = function(){
    return `안녕하세요. ${this.no}호 ${this.name}점입니다!`
  };
}
//객체 양산
const chain1 = new YalcoChicken('판교',3); //인스턴스
const chain2 = new YalcoChicken('강남',17);
const chain3 = new YalcoChicken('제주',24);

//인스턴스가 만들어지면 각각에 생성자 함수명이 앞에 붙는다.
//메서드는 객체 안에서나, Class에서만 가능하다.
/*introduce(){
}*/
//보통 은 선언식, 표현식을 사용.
// const introduce = function(){}
// function introduce(){}
// const introduce = ()=>{};
//생성자 함수에 new를 붙이지 않으면 undefined를 반환
//prototype
//원래 클래스가 없었고 prototype만 있었다.
//이미 객체가 만들어졌음에도 불구하고 prototype이라는 메서드를 사용해서 각 객체에 추가 할 수 있다.
//기능적인 측면에서 효율성이 높다.

YalcoChicken.prototype.introEng = function(){
  return `Welcome to Yalco Chicken at ${this.name}!`;
};
console.log(chain1.introEng());

//화살표 함수에서의 this는 객체를 가르키는 것이 아니라 상위 컨텍스트를 가르키기때문에 생성자 함수에서  this를 사용하지 않는다.

//화살표 함수만  function이 없음... 변수 안써도됨
//일반 함수 function 있음 이름없이 변수만 넣어도 되고 이름을 넣어도 되고
//선언식만 호이스팅됨
//객체와 class에서만 메서드 사용 가능


//계속해서 유기적으로 prototype을 통해서 연결이 된다.
//instanceof를 사용해서  true 인지 false인지를 확인 할 수 있다.
//생성자 함수 자체에 함수 자체의 property를 지정 할 수 있다.