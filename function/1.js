const food1 = {
  name:'햄버거',
  price:5000,
  vegan:false
};

console.log(food1);

console.log(
  food1.name,
  food1['price'] //대괄호 문자열 접근
);

const food2 ={};
console.log(food2);

food2.name ="샐러드";
food2.price = '6000';
food2['vegan'] = true;

console.log(food2);

food2['price'] = 6500;
food2.vegan = false;

console.log(food2); // 객체의 key값으로는 ''을 붙이지 않고 바로 써도된다. 
//''을 쓸 때에는 명명 규칙에서 벗어나는 키 이름을 사용 할 때에만 붙여주면 된다.
//그리고 접근할 때에도 대괄호 프로퍼티 접근만 가능하다.

const obj = {
  ['a-b-c']:true
};
console.log(obj['a-b-c']);

//객체 리터럴에서 변수를 접근하기 위해서는 ${}를 사용한다.
//key값을 동기적으로 변경할 수도 있다.
let idx = 0;
const obj2 = {
  ['key-' + ++idx]:`value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
};
console.log(obj2); //++idx 부분에 바로 1이 더해지고, 다음에는 그대로, 
//idx++ 지금은 그대로고 다음부터 1이 더해짐

//객체나 배열을 키값으로 사용 할 수 없다.
const objKey = {x:1, y:2};
const arrKey = [1,2,3];

const temp = {
  [objKey] : '객체를 키값으로',
  [arrKey] : '배열을 키값으로'
};
console.log(temp);
//objkey를 얻기 위해서 key값을 다른걸로 해도 같은 값이 나온다.
console.log(temp[objKey]);
console.log(temp[{a:1,b:2}]) // 키 문자열이나 변수명만으로 접근 가능
//위 두개가 같은 값을 반환한다.
//객체는 어떤 문자열이 와도 반환이 되고, 배열은 안에 있는 숫자들을 이어붙인 문자열이 키 이름이 된다.
//원하는 대로 접근 할 수가 없음. 이후 map과는 다른 접근 방식이다.

//기존에 있는 객체의 프로퍼티 삭제해보기
const person1 = {
  name:'홍길동',
  age:24,
  school:'한국대',
  major:'컴퓨터공학'
};

console.log(person1);

delete person1['major'];
console.log(person1);

delete person1['school'];
console.log(person1);

//없는 키값을 삭제해도 객체에서는 오류가 발생하지 않고 undefined만 반환, 아무일도 일어나지 않는다.
delete person1['school'];
console.log(person1);;

//동적으로 키를 접근해서 새로운 property 만들어보기.

const product1 = {
  name:'노트북',
  color:'gray',
  price:8000
};

function addModifyProperty(obj, key, value){
  obj[key] = value; // 동적으로 key를 추가할 때는 마침표 프로퍼티 사용할 수 없다. 대괄호만 가능
}

function deleteProperty(obj,key){
  delete obj[key];
}

addModifyProperty(product1,'inch',16);
console.log(product1);

deleteProperty(product1,'price');
console.log(product1);

//변수와 상수에 한번에 기입할 때, let. const 한번만 붙여줘도 가능하다.
const a=1,b=2;
console.log(a,b);

//ES6버전 SIMPLE
const x=1, y=2;
const obj3 = {
  x:x,
  y:y
};
console.log(obj3);
//key랑 변수명이 같으면 key를 생략 할 수 있다.
const apple = 'apple', banana = 'banana';
const fruit = {
  apple,
  banana
};

console.log(fruit);
console.log(fruit['apple'],fruit['banana']);

//return 값을 계속 이용할 때 밖으로 값을 내보내 주는 것이다.
function createProduct(name,price,quantity){
  return {name,price,quantity} // 객체를 만들어서 내보내는 것이다. key를 parameter과 같은 걸로 쓸거면 생략 가능 한것 값을 name이라는 이름의 매개변수로 받고, 값을 그대로 넣는다. 
}
//return이 되었기 때문에 값을 저장 할 수 있다.
const product10 = createProduct('선풍기',50000,50);
const product11= createProduct('청소기',125000,32);

console.log(product10, product11);

//메서드
//함수의 축약 버전,, 축약버전만 메서드라고 부르는 것으로 정의 바뀜
//일반 함수를 객체에 썼을 때 function 이 붙음
//축약버전은 function이 붙지 않고 냅다 key에 인수받음

const person = {
  name:'홍길동',
  salutate:function(formal){
    return formal
    ? `안녕하십니까, ${this.name}입니다` //객체내에서 key값 접근하는 방법
    : `안녕하세요, ${this.name}이에요`
  }
};
console.log(person['salutate'](true));
console.log(person.salutate(false));

//메서드 함수 사용 
const people = {
  name:'nora',
  salutate(formal){
    return formal //함수 반환
    ? `안녕하십니까, ${this.name} 입니다`
    : `안녕 ${this.name}이야`
  }
};

console.log(people.salutate(true));
console.log(people.salutate(false));