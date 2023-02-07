//객체와 배열은 참조타입이다. 
//원시타입이 아닌 모든 것은 근본적으로 객체이다.
//객체의 프로퍼티에 접근 하는 방법.
const person1 = {
  name: '김철수',
  age: 25,
  married: false
};

console.log(typeof person1);
console.log(person1);

console.log(
  person1.name,
  person1.age,
  person1.married,
);

console.log(
  person1['name'],
  person1['age'],
  person1['married'],
)

//객체에 key가 있는지 없는지 boolean으로 확인 할 수 있다.
console.log('name' in person1);

//문자열 표시없이 []로 접근 하기 위해서는 문자열을 다시 담아줘야 접근이 가능하다.
const key1 = 'name';
console.log(person1[key1]);
console.log(key1 in person1);

//객체 배열에서 상수를 사용해도 안에 있는 값들은 변경이 가능하다. 하지만 값 그 자체를 바꾸는 것은 불가능 하다.
//객체는 힙 영역이 따로 있기 때문에 힙에 대한 값을 변경하는 것은 막을 수 없다.
//원시형에서 데이터 영역을 바로 바꾸는 것만 제한이 있다.

//객체, 배열, 함수는 서로서로 넣어줄 수 있다.

//원시형 copy by value, 참조형 copy by reference 그래서 변수를 재할당 할 때 참조 주소가 복사되어 변경되면 이전 객체 값들도도 변경된다.