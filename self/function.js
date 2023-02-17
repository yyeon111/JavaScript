const food1 = {
  name:'햄버거',
  price:5000,
  vegan:false
};

console.log(food1);
console.log(food1.name, food1['price']);

const food2 = {};
console.log(food2);

food2.name = '샐러드';
food2.price = 6000;
food2['vegan'] = true;

console.log(food2);

food2['price'] = 6500;
food2.vegan = false;
console.log(food2);

// let idx = 0;
// const obj = {
//   ['key-'+ ++idx]:`value-${idx}`,
//   ['key-'+ ++idx]:`value-${idx}`,
//   ['key-'+ ++idx]:`value-${idx}`
// };

// console.log(obj);

const objKey = {x:1,y:2};
const arrKey = [1,2,3];

const obj = {
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
};

console.log(obj[objKey],obj[arrKey]);
console.log(obj[{a:1}]); //type이 object이면 무조건 반환이 된다.
console.log(obj['1,2,3']); //배열이 아닌 배열을 문자열로 반환한 것이 키값이 된다. 
//의도와 다른 값이 키가 되기 때문에 객체와 배열은 사용하지 않는다.

const person1 = {
  name:'홍길동',
  age:24,
  school:'한국대',
  major:'컴퓨터공학'
};

console.log(person1);

delete person1.name;
console.log(person1);

person1.name = "Nora";
console.log(person1);

// const product1 = {
//   name:'노트북',
//   color:'gray',
//   price:80000
// };

// function addModifyProperty(obj,key,value){
//   obj[key] = value;
// }

// function deleteProperty(obj,key){
//   delete obj[key];
// }

//함수 호출, 인자를 넣어서 전달.
// addModifyProperty(product1,'inch',16);
// console.log(product1);

// addModifyProperty(product1,'price',750000);
// console.log(product1);

// deleteProperty(product1,'price');
// console.log(product1);

//ES6
//변수명을 key로 사용 할 수 있다.
const x=1, y=2;

const obj1 = {
  x,y
};
console.log(obj1);

//매개변수 명을 키로 사용 할 수 있다.
function createProduct(name,price,quantity){
  return {name,price,quantity};
}
const product1 = createProduct('선풍기',5000,50);
const product2 = createProduct('청소기',125000,32);

console.log(product1,product2); // 함수를 통해 객체 생성

//메서드
//객체 안에서, class에서 메서드 사용 할 수 있다. 생성자 함수에서는 불가능. 
const person = {
  name:'홍길동',
  salutate(formal){
    return formal
    ? `안녕하십니까, ${this.name}입니다`
    : `안녕, ${this.name}이야`
  }
}
// console.log(person.salutate(false));
// console.log(person); //함수를 그냥 가지고 있는것, 호출 할 때는 따로 ()써서 전달 해 줘야 반환이 된다.
const tempFunction = person.salutate(true);
console.log(tempFunction); //함수가 담김 일급 함수