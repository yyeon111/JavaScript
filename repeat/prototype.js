function YalcoChicken (name, no) {
 
  // if (!new.target) { // 이 부분을 지우고 다시 해 볼 것
  //   return new YalcoChicken(name, no);
  // }
  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

const chain1 = new YalcoChicken('판교', 3); //new가 있으면 프로퍼티가 리턴이됨
const chain2 = YalcoChicken('강남', 17); //일반 함수처럼 return도 없어서 안됨

console.log(chain1, chain2);