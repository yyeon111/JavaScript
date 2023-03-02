// //프로퍼티 => 데이터 프로퍼티, 접근자 프로퍼티

// const person = {
//   fullName: '홍길동',
//   ageInNumber: 25,

//   get name(){
//     return this.fullName
//     .split('')
//     .map((letter, idx) => idx === 0 ? letter : '*')
//     .join('');
//   },
//   get age(){
//     return this.ageInNumber + '세';
//   },
//   set age (age) {
//     this.ageInNumber = Number(age);
//   }
// };

// console.log(
//   person.name, person.age
// );


//atribute 종류
//value = 프로퍼티 값 -> undefined
//writable = 갱신 가능 여부 수정 삭제 -> false
//Enumerable = for in문.. , Object.keys문 가능 여부  -> fasle
//configurable = 프로퍼티 제거, value, writable 제외한 어트리뷰터 수정 가능 여부 -> false 

//get getter함수 -> 기본 undefined
//set setter함수 -> 기본 undefined
//Enumerable  -> false
//configurable -> false

//어트리뷰터 보기
//Object.getOwnPropertyDescriptor 
//Object.getOwnPropertyDescriptors

// console.log('1',
//   Object.getOwnPropertyDescriptor(person, 'fullName'),
//   '2', Object.getOwnPropertyDescriptor(person, 'ageInNumber'),
//   '3', Object.getOwnPropertyDescriptor(person, 'name'),
//   '4',Object.getOwnPropertyDescriptor(person, 'age') //객체명, 프로퍼티 인자
// );

// console.log(
//   Object.getOwnPropertyDescriptors(person)
// );

//defineProperty => 객체 생성 이후 하나씩 다 해줘야함..
const person1 = {};
Object.defineProperty(person1, 'fullName', {
  value: '홍길동',
  writable: true
});
Object.defineProperty(person1, 'name', {
  get() {
    return this.fullName
    .split('')
    .map((letter, idx) => idx === 0 ? letter : '*')
    .join('');
  }
});

// console.log(person1, person1.name);
// console.log(Object.getOwnPropertyDescriptors(person1));

Object.defineProperties(person1, {
  ageInNumber: {
    value: 25,
    writable: true
  },
  age: {
    get () {return this.ageInNumber + '세';},
    set (age) {
      this.ageNumber = Number(age);
    }
  }
});

person1.age = 30;

console.log(person1, person1.age);
console.log(
  Object.getOwnPropertyDescriptors(person1)
);

const person = {
  fullName: '홍길동',
  ageInNumber: 25,
};

// 💡 value를 전우치로 바꾸면
Object.defineProperty(person, 'fullName', {
  value: '전우치'
});

console.log(person);
console.log(
  Object.keys(person)
);
// 💡 enumerable을 false로 바꾸면
Object.defineProperty(person, 'fullName', {
  enumerable: false
});

console.log(
  Object.keys(person)
);
console.log(
  // ⭐️ Object의 또 다른 정적 메서드
  // ⭐️ enemerable이 false인 프로퍼티도 반환
  Object.getOwnPropertyNames(person) // keys와 같은 기능
);

// 💡 seal: configurable을 false로 바꿈
Object.seal(person);

console.log(
  Object.getOwnPropertyDescriptors(person)
);

Object.preventExtensions(person);
console.log(
  Object.getOwnPropertyDescriptors(person)
);

Object.freeze(person);
console.log(
  Object.getOwnPropertyDescriptors(person)
);