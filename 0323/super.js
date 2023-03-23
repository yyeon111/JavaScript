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

// class ConceptYalcoChicken extends YalcoChicken {
//   #word = '';
//   constructor (name, no, word) {
//     super(name, no);
//     this.#word = word;
//   }
//   introWithConcept () {
//     return super.introduce() + ' ' + this.#word;
//   }
//   order (name) {
//     return super.order(name) + ' ' + this.#word;
//   }
// }

// const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');

// console.log(pikaChain);
// console.log(pikaChain.word);
// console.log(pikaChain.introWithConcept());
// console.log(pikaChain.order('후라이드'));

class YalcoChicken {
  static brand = '얄코치킨';
  static contact () {
    console.log(`${this.brand}입니다. 무엇을 도와드릴까요?`);
  }
}

class ConceptYalcoChicken extends YalcoChicken {
  static contact () {
    super.contact();
    console.log('컨셉 가맹문의는 홈페이지를 참조하세요.');
  }
}

ConceptYalcoChicken.contact();
console.log(ConceptYalcoChicken);