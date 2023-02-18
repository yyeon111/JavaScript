//스스로의 값을 갖지 않는다.
// //다른 프로퍼티의 값을 읽거나 저장
// //객체, class에서 사용 가능
// const person1 = {
//   age:17,

//   get koreanAge(){
//     return this.age + 1;
//   },

//   set koreanAge(krAge){
//     this.age = krAge -1;
//   }
// }

// console.log(person1, person1.koreanAge); //자동 getter반환
// person1.koreanAge = 20;
// console.log(person1.age);

// class YalcoChicken{
//   constructor(name,no){
//     this.name = name;
//     this.no = no;
//   }
//   get chainTitle(){
//     return `${this.no}호 ${this.name}점`;
//   }
//   set chainNo(chainNo){
//     if(typeof chainNo !== 'number') return;
//     if(chainNo <= 0) return;
//     this.no = chainNo;
//   }
// }

// const chain1 = new YalcoChicken('판교',3);
// console.log(chain1.chainTitle);
// console.log(chain1);
// chain1.chainNo = 1;
// console.log(chain1);

// class YalcoChicken {
//   constructor (name, no) {
//     this.name = name;
//     this.no = no;
//   }
//   get no () { 
//     return this._no + '호점'; 
//   }
//   set no (no) { 
//     this._no = no;
//   }
// }

// const chain1 = new YalcoChicken('판교', 3);
// chain1.no = 4;
// console.log(chain1);
// console.log(chain1.no); // 다시 세터 호출하지 않고 this 값만 변경 가능

//private 필드를 통한 은닉
//객체 내부의 값을 감춘다.
//인스턴스의 프로퍼티 값을 함부로 열람하거나 수정하지 못하도록 한다.
// class Employee{
//   #name = ''; //초기값을 설정하면서 #을 붙여주고 cosntructor에도 #을 붙여야 한다.
//   #age = 0;
//   constructor(name,age){
//     this.#name = name;
//     this.#age = age;
//   }
// }
// const emp1 = new Employee('김복동',32);
// console.log(emp1);//빈 객체
// console.log(emp1.name); //undefined
// // console.log(emp1.#name); //아예 오류
// console.log(emp1['#name']); //undefined

class Employee {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name () {
    // [n]: n + 1 번째 글자를 반환
    return this.#name[0] + '모씨';
  }
  get age () {
    return this.#age - (this.#age % 10) + '대';
  }
  set age (age) {
    if (typeof age === 'number' && age > 0) {
      this.#age = age;
    };
  }
  getOlder(years) { this.#age += years; }
}

const emp1 = new Employee('김복동', 22);

// console.log(emp1.name, emp1.age);
// emp1.age = 10;
// console.log(emp1.age);
// console.log(emp1); // 빈객체

// emp1.getOlder(20);
// console.log(emp1.age);
// console.log(emp1['#age']);

//접근자 프로퍼티, 함수를 통해 constructor에는 접근 가능하다. 
//그래도 객체 자체의 값을 전체적으로는 볼 수 없다.