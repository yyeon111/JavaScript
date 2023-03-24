const obj = {x: 1, y: 2};
const {x, y} = obj;
console.log(x, y); // 1, 2


function introduce ({name, age}) {
  return `나는 ${age}살 ${name}야.`
}

const child = {
  name: 'Nora',
  age: 8
};

console.log(introduce(child)); // 나는 8살 Nora야.

const arr = [
  {name: '사과', 카테고리: '과일', 가격: 300},
  {name: '시금치', 카테고리: '채소', 가격: 200},
  {name: '딸기', 카테고리: '과일', 가격: 400}
];

const fruits = arr.filter(({카테고리}) => 카테고리 === '과일');
console.log(fruits); 
const name = fruits.map(({name}) => name);
console.log(name); // ['사과, '딸기']