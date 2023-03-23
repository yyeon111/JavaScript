class parent {
  lastName = 'Park';
  adress = 'Seoul, Korea';
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
  introduce () {
    return `${this.adress}에 거주하고 있는 ${this.lastName}씨 집안입니다.`;
  }
}

class Child extends parent{
  firstName = 'Nora';
  constructor (name, age, hobby) {
    super (name, age);
    this.hobby = hobby;
  }
  introduce () {
    return super.introduce() + ` 취미는 ${this.hobby}예요!`
  }
}

const child1 = new Child('','','dancing');
console.log(child1.introduce());


