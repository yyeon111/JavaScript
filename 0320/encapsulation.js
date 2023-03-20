// class Employee {
//   #name = '';
//   #age = 0;
//   constructor (name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
// }

// const emp1 = new Employee('김복동', 32);
// console.log(emp1);
// console.log(emp1.name);
// // console.log(emp1.[#name]);

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
  set age (age) { //은닉은 이름이 같지 않기 때문에 _사용 하지 않아도됨
    if (typeof age === 'number' && age > 0) {
      this.#age = age;
    };
  }
  getOlder(years) { this.#age += years; }
}

const emp1 = new Employee('김복동', 22);
console.log(emp1.name);
console.log(emp1.age);
emp1.age = 10;
console.log(emp1.age);
emp1.getOlder(20);
console.log(emp1.age);

//student = 나이, 몇살입니다, 다시 set

const student1 = {
  name: 'Nora',
  age: 18,
  get age () {
    return `${this.name}은 ${this.age}입니다.`;
  },
  set age (age) {
    if (typeof age === 'number') {
      this._age = age;
    }
    return console.log('다시 입력하세요');
  }
}

student1.age = '이십';
student1.name = 'YS';
console.log(student1);

class Students {
  #name = '';
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
  get age () {
    return `${this.#name}은(는) ${this.#age}살 입니다.`;
  }
  set age (age) {
    this.#age = age;
  }
  get 대 () {
    return this.#age - (this.#age % 10) + '대';
  }
}

const student2 = new Students('Nora', 18);
console.log(student2.age);
console.log(student2);
console.log(student2.대);