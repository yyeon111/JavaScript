// const map1 = new Map();
// console.log(typeof map1); //object
// console.log(map1 instanceof Object); //true

// const arrKey = [1, 2, 3];
// const objKey = {x: 1, y: 2};

// map1.set(arrKey, 'array Key');
// map1.set(objKey, 'Object Key');
// console.log(map1);

// const obj = {
//   arrKey: 'array key',
//   objKey: 'Object Key'
// } //변수로 들어가는 것이 아니라 이름으로 들어감 []대괄호를 통해 object로서 전달 할 수 있다
// console.log(obj);
// console.log(obj.arrKey);
// console.log(obj.objKey);
// obj.arrKey = 'changed arrKey';
// console.log(obj);

// // [[키 쌍]...] 배열로 생성 + 초기화
// const map3 = new Map([
//   ['x', 1],
//   [123, 'ABC'],
//   [true, { a: 1, b: 2 }],
// ]);

// console.log(map3);
// console.log(map3[true]);
// //인덱스 접근안 안됨.
// //수정 불가능
// console.log(map3.size);
// // map3.get(123) = 456;
// console.log(map3.keys());
// const test = map3.keys();
// console.log(test);

// console.log(map3.values());
// console.log(map3.entries());

const map3 = new Map([['x',1],['y',2]]);
console.log(map3);
map3['x'] = 2;
delete map3['y'];
console.log(map3);

map3['z'] = 3;
console.log(map3);
map3.delete('z');
console.log(map3);
for(let i of map3) {
  console.log(i);
  console.log(i[0] = ['z',10]);
}
console.log(map3);