//getter함수, setter함수 (메서드로 작성)
//접근자 프로퍼티
//스스로 값을 갖지 않음.

// const person1 = {
//   age: 17,

//   get koreanAge () {
//     return this.age + 1;
//   }, //외부에는 다른 값을 반환. 

//   set koreanAge (krAge) { //값을 전달 받아 새롭게 set하기 위해서 인자를 받아야 한다.
//     this.age = krAge -1;
//   } //새로운 값 set.
// };

// console.log(person1, person1.koreanAge); //get, set 이름: [Getter/Setter] 보여지는 값 따로 알려준다.

// //set 할 때, 함수이지만 property처럼 접근해서 값 전달.
// //age property를 직접 변경하지 않고 set을 이용.
// person1.koreanAge = 20; //Getter, Setter이름이 같아도 알아서 Getter로 인지하고 접근한다.
// console.log(person1, person1.koreanAge); //보여지는건 Getter의 값만을 보여준다.

// //클래스에서 사용
// class YalcoChicken{
//   constructor(name, no){
//     this.name = name;
//     this.no = no;
//   }
//   get chainTitle () {
//     return `${this.no}호 ${this.name}점`; //반드시 값을 반환 해야 한다.
//   }
//   set chainNo(chainNo) {
//     if (typeof chainNo !== 'number') return;
//     if(chainNo <= 0 ) return;
//     this.no = chainNo;
//   }
// }

// const chain1 = new YalcoChicken('판교',3);
// console.log(chain1);
// console.log(chain1.chainTitle); //프로퍼티에 직접 접근을 해야 값을 알 수 있다.
// chain1.chainNo = '4'; //if에서 걸려서 return 끝남
// console.log(chain1);
// chain1.chainNo = '-1'; //if에서 걸려서 return 끝남
// console.log(chain1);
// chain1.chainNo = 4; //조건 만족! this.no 바뀜!
// console.log(chain1);

//프로퍼티 명 = 필드 명과 setter가 같을 경우 무한 반복이 일어 날 수 있다.
//setter함수는 마침표 표기법으로 접근이 가능 하기 때문에 계속해서 자기 자신을 돈다.
//this.no를 찾아야되는데 없으니까 스코프 타고간다.
//setter 함수명을 가리키는 것이 아니라는 뜻으로 _를 붙여주면 된다.

class Students {
  constructor (name, no){ //no는 this로 바로 가지 않고, setter로 간다. => 경로 바뀜
    this.name = name;
    this.no = no; 
  }
  get no () {
    return this.no + '로 배정 되었습니다!';
  }
  set no (no) {
    this._no = no; //전달받은 인자를 담고, 객체 프로퍼티가 _no로 변경되서 저장된다.
  }
}

const student = new Students ('박**', 3);
console.log(student);
student.no = 20;
console.log(student);
// console.log(student.no); //이제 이렇게 접근 할 수 없다.
console.log(student._no);
