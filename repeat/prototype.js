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

const chain1 = new YalcoChicken('판교', 3);
const chain2 = YalcoChicken('강남', 17);

console.log(chain1, chain2);