// class Employee {
//   #name = ''; //constructor만 말고 관련된 프로퍼티 # 로 갑싸줄 것
//   #age = 0;
//   constructor (name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
// }

// const emp1 = new Employee('김복동', 32);

// console.log(emp1); //console.log에서 전체적인 값은 확인 할 수 있다.
// // console.log(emp1.#name); 접근 시, 오류 발생
// // console.log(emp1['name']); undefined 반환.

//클래스 내부에서는 접근 가능해서 내부에서 접근 가능.
class Students {
  #name = '';
  #age = 0;
  constructor (name, age){
    this.#name = name;
    this.#age = age;
  }
  get name () {
    return this.#name[0] + '모씨';
  }
  get age () {
    return this.#age - (this.#age % 10) + '대';
  }
  set age (age) {
    if(typeof age === 'number' && age > 0) {
      this.#age = age;
    };
  }
  getOlder(years) { this.#age += years;} //함수 인자 따로 설정 할 수 있다.
}

const student1 = new Students('김복동', 22);
console.log(student1);
console.log(student1.age); //return 값은 볼 수 있지만 프로퍼티 값은 볼 수 없다.
student1.age = 0;
console.log(student1.age);
student1.age = 35;
console.log(student1.age);
student1.getOlder(20);
console.log(student1.age);