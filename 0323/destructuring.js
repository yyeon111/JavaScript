const arr = [1, 2, 3];
const {length} = arr;

console.log(length);

const obj = {x: 1, y: 2};
const {x, y} = obj;

console.log(x, y);

function introduce ({name, age}) {
  return `안녕하세요, ${age}살, ${name}입니다.`;
}

const child = {
  no: 1,
  name : 'Nora',
  age: 8,
  hobby: 'dancing',
  language: 'Korean'
};

console.log(introduce(child));