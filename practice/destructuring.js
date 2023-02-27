// const obj1 = {
//   x: 1, y: 2, z: 3
// };

// const x = obj1.x;
// const y = obj1.y;
// const z = obj1.z;

// console.log(x, y, z);

// const obj1 = {
//   x: 1, y: 2, z: 3
// };
// const {x, y, z} = obj1; //갹채 표시, key만 표시하면 value를 추츨한다.
// console.log(x, y, z);

//일부만 가져오기 가능
//키값을 그대로 가져와야함 => 비구조적
const obj2 = {
  x: 1, y: 2, z: 3
}
const {x, y} = obj2;
console.log(x,y);

//프로퍼티를 쓰면 다 추출 할 수 있다.
//array, string length 프로퍼티 있어서 추출 할 수 있다. 기본 length 자체가 키가 되기 때문이다.
const array1 = [1, 2, 3, 4, 5];
const {length} = array1;
console.log(length);

function intorduce ({age, married, job, name}){ // 인자로 어처피 전달되기 때문에 기존 = 을 사용하지 않아도 된다.
  console.log(`제 이름은 ${name},`
    + `나이는 ${age}세구요.`
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'} 입니다.` // ? 조건문 쓸 때 ${}안에 반환 값 까지 전부 써 줘야한다.
   )
}

const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

intorduce(person1);