
const person1 = {
  age:17,

  get koreanAge(){
    return this.age + 1;
  },

  set koreanAge(krAge){
    this.age = krAge -1;
  }
}

console.log(person1, person1.koreanAge); //호출하지 않고 그냥 프로퍼티로 접근
//person1안에 접근자 프로퍼티 정보들이 나온다.

//세터 저장방법
person1.koreanAge = 20; //전달된 인자를 가지고 안에서 계산해서 넣어준다.
console.log(person1,person1.koreanAge);




