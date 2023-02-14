class YalcoChicken{
  constructor(name,no){
    this.name = name;
    this.no = no;
  }
  introduce(){
    return `안녕하세요, ${this.no}호 ${this.name}점입니다`;
  } // method
}

const chain1= new YalcoChicken('판교',3);
const chain2 = new YalcoChicken('강남',17);
const chain3 = new YalcoChicken('제주',24);

console.log(chain1,chain2,chain3);

//Syntactic Sugar =
//클래스와 생성자 함수의 동작이 동일하지는 않음 일부기능들이 다르게 동작한다.
//클래스는 호이스팅 되지 않는다.
//함수는 호출을 위에 해도 오류가 나지 않았다 왜냐면 함수는 호이스팅이 되기 때문이다.
//class는 위에서 new를 만들거나 호출 할 수 없다. 왜냐면 class는 호이스팅이 되지 않기 떄문이다.
//생성자 함수는 new가 없으면 undefined, class는 new없으면 오류가 난다.
//class는 ES6이후에 만들어진 문법인데, 이 때 만들어진 문법들은 엄격모드가 자동으로 적용되어 있다.

//constructor : 뭔가를 생성하는 method 이다.
//class마다 constructor은 하나만 있을 수 있다.
//constructor 매개변수에 기본값을 설정해서, 추가 인자가 들어왔을 때 기본값으로 넣을 수 있다.

class Person{
  constructor(name,age,married = false){
    this.name = name;
    this.age = age;
    this.married = married;
  }
}
const person1 = new Person('박영희',30,true);
const person2 = new Person('오동수',18);
console.log(person1,person2);

//인자가 없을 때에는 constructor 생략 가능하다. = constructor가 필수는 아니다.
class Empty{}
console.log(new Empty());

//class도 객체처럼 메서드를 사용 할 수 있다.

class Dog{
  bark(){ //받는 인자가 없기 떄문에  constructor생략, method사용
    return '멍멍'; 
  }
}
const badugi = new Dog();
console.log(badugi, badugi.bark());
//Dog 인스턴스에 아무것도 가지고 있지 않는다. prototype안에 dark()가 들어가있어서 그때 그때 꺼내서 사용해야한다. >> 나중에 다시 보충해야 할 것 같다.
//생성자 함수를 만들면 인스턴스 자체가 함수를 가지고 있다. 