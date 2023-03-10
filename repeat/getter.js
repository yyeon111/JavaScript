const person = {
  age: 17,

  koreanAge () {
    return this.age + 1;
  },

  setAge (krAge) {
    this.age = krAge - 1;
  }
};

person.setAge(20);
console.log(person.age);
console.log(person.koreanAge());



const person1 = {
  age: 17,

  get koreanAge () {
    return this.age + 1;
  },

  set koreanAge (krAge) {
    this.age = krAge - 1;
  }
}
console.log(person1, person1.koreanAge);
person1.koreanAge = 20;
// //set에만 전달

console.log(person1, person1.koreanAge);

// class YalcoChicken {
//   constructor (name, no) {
//     this.name = name;
//     this.no = no;
//   }
//   get chainTitle() {
//     return `${this.no}호 ${this.name}점`;
//   }
//   set chainNo(chainNo) {
//     if (typeof chainNo !== 'number') return;
//     if (chainNo <= 0) return;
//     this.no = chainNo;
//   }
// }

// const chain1 = new YalcoChicken('판교', 3);
// console.log(chain1.chainTitle);

// chain1.chainNo = '4';
// console.log(chain1);

// chain1.chainNo = -1;
// console.log(chain1);

// chain1.chainNo = 4;
// console.log(chain1);