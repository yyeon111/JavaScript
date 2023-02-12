//delete
const person = {
  'name':'Nora',
  'age':20,
};

person['school']='Korea University';

console.log(person);

delete person['school'];
console.log(person);

//객체의 프로퍼티에 동적인 접근 할 때에는 마침표 불가능.
const product1 = {
  name: '노트북',
  color: 'gray',
  price: 800000
}

function addModifyProperty (obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty (obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}

//메서드 => 객체에서 함수를 키처럼 샤용 할 수 있다. ES6에서 특정한 문법으로 함수를 정의하는 것만 메서드라고 부른다.특성,기능이 다름
// ⭐️ 메서드 정의
const person = {
  name: '홍길동',
  
  salutate (formal) { //Key를 함수명 기능하는 것만 써주고, function은 써주지 않아도 된다.
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person.salutate(true));