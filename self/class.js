// // class YalcoChicken{
// //   constructor(name,no){
// //     this.name = name;
// //     this.no = no;
// //   }
// //   introduce(){
// //     return `안녕하세요, ${this.no}호 ${this.name}입니다!`;
// //   }
// // }
// // const chain1 = new YalcoChicken('판교',3);
// // const chain2 = new YalcoChicken('강남',17);
// // const chain3 = new YalcoChicken('제주',24);

// // console.log(chain1, chain1.introduce());
// // console.log(chain2, chain2.introduce());
// // console.log(chain3, chain3.introduce());

// //작동방법이 생성자 함수와는 다름. 
// //함수들은 호이스팅 되지만 class함수는 호이스팅 되지 않는다. => 먼저 호출 할 수 없다.
// //consturctor은 프로퍼티를 초기화함, defalut가 있을 시, 인자가 필요없을 시에 생략 가능하다.

// //생성자 함수에 넣은 함수는 객체 안에 들어간다.
// //class안에 넣은 함수는 prototype으로 들어간다.

// class YalcoChicken {
//   no = 0; //프로퍼티 접근 가능
//   menu = { '후라이드': 10000, '양념치킨': 12000 }; //이 값들도 객체 안에 저장되는 것

//   constructor (name, no) {
//     this.name = name;
//     if (no) this.no = no; //인자로 받을 때 constructor필요
//   }
//   introduce () {
//     return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
//   }
//   order (name) {
//     return `${this.menu[name]}원입니다.`
//   }
// }
// const chain0 = new YalcoChicken('(미정)');
// console.log(chain0, chain0.introduce());

// chain0.menu['양념치킨'] = 13000;

// console.log(chain0.order('양념치킨'));

class YalcoChicken {


  // 정적 변수와 메서드
  static brand = '얄코치킨';
  static contact () {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }
property = 'property';
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const apple = new YalcoChicken('apple',01);
console.log(apple);
console.log(YalcoChicken);
console.log(YalcoChicken.contact());

class Dog {
  bark () {
    return '멍멍';
  }
}

console.log(typeof Dog);

const 개 = Dog; // 할당될 수 있는 일급 객체
const 바둑이 = new 개();

console.log(바둑이); // 💡 콘솔에 나타난 타입 확인

//사후관리 할 수 없음
//static으로 class자체 필드, property 생성 가능
//constructor밖에서 default property 생성 가능
//함수 생성시 prototype안에 위치

//prototype키워드로 사후관리 가능
//생성자 함수 외부에서 생성자 함수 자체 필드 함수의 property생성 가능