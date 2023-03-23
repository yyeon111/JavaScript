class A {
  static brand = '사과';
  static introduce () {
    return `나는 ${this.brand} 장사를 하고 있어요.`;
  }
  name = '사과공장';
  constructor (year) {
    this.career = year;
  }
  welecome () {
    return `저희 ${this.name}은 ${this.career}년의 경력을 가지고 있습니다.`
  }
}

class B extends A {
  // static super(brand);
  static name = 'b';
  static introEng(item) {
    return super.introduce() + `' I'm a suvenier of ${item}.`;
  }
}
const a = new A (15);
console.log(B.brand, B.name); //static도 가져온다.
console.log(B.introEng('apple'));
console.log(A);
console.log(a.welecome());