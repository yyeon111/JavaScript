function Main (name, no) {
  this.name = name;
  this.no = no;
  this.introduce = function (hi) {
    return `안녕하세요 ${this.no}호점 ${this.name}입니다. ${hi}`
  }
}

const chain1 = new Main('피자나라치킨공주', 1);
console.log(chain1.introduce('어서오세요'));

Main.prototype.introEng = function (hello) {
  return `${hello} to ${this.no} branch in ${this.name}!!`
};

console.log(chain1.introEng('Welcome!'));
console.log(chain1);

Main.prototype.brand = '요식업';
console.log(chain1);
console.log(chain1.brand);