// const class1 = {
//   x: 1, y: 'A', z: true
// };

// const class2 = { ...class1 }; //값을 복사

// // 아래의 참조복사 코드와 다름!
// // const class2 = class1;

// console.log(class2);

// class1.x = 3;
// console.log(class1,class2);
// class2.x = 2;
// console.log(class1,class2);

const class1 = {
  a: 1, b: 'A', c: true
};
const class2 = {
  d: { x: 10, y: 100 }, e: [1, 2, 3]
};
const class3 = {
  ...class1, z: 0
}
const class4 = {
  ...class2, ...class3, ...class2.d
}
// console.log(class3);
// console.log(class4);

class2.d.x = 0;
console.log(class2,class4);

// const class1 = {
//   ...{ a: 1, b: 2 },
//   ...{ b: 3, c: 4, d: 5 },
//   ...{ c: 6, d: 7, e: 8 } //각 값이 합쳐진 객체가 만들어짐
// }

// console.log(class1);
//변수만...하는게 아니라 객체 앞에...해서 넣으면 중복 된 값을 걸러 저장 할 수 있다.

// const class1 = {
//   x: 1,
//   y: { a: 2 },
//   z: [3, 4]
// };

// const class2 = { ...class1 };
// class1.x++;
// class1.y.a++;
// class1.z[0]++;
// console.log(class1); //얕은복사
// console.log(class2); //원본데이터가 바뀌면 객체랑 배열이 같이 바뀜  => 깊은복사

//디스트럭쳐링 destructuring
const obj1 = {
  x: 1, y: 2, z: 3
};

// const x = obj1.x;
// const y = obj1.y;
// const z = obj1.z;

// console.log(x, y, z);

// const{x,y,z} = obj1; //키가 변수에 찾아 들어감
// console.log(x, y, z);

//일부만 가져오기도 가능
const {x,z} = obj1;
console.log(x,z);

const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1;

console.log(length); //array는 index랑 length 정보를 지원한다.

// 인자를 하나의 객체로 묶어 받음 
function introduce(person) {
  console.log(`제 이름은 ${person.name}, `
    + `나이는 ${person.age}세구요. `
    + `직업은 ${person.job}, `
    + `${person.married ? '기혼' : '미혼'}입니다.`
  )
}

// 가독성 좋음, 프로퍼티명만 제대로 입력하면 순서 무관
const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O' // 추가 인자 무관
};

introduce(person1);

// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) { //destructuring 해체해서 각 key값을 전달.
  // 순서 무관
  // 이 프로퍼티들을 갖는 객체를 인자로 받겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

const person2 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

introduce(person2);