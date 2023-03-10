const set1 = new Set();
console.log(set1, typeof set1);//object
//그대로 들어간다.
//암묵적인 변환이 되지 않음. 
//초기값 new Set으로 생성 

//prototype method
set1.add(1);
set1.add(true);
set1.add('');
set1.add(0);
set1.add(1);
set1.add(false);
set1.add([1, 2, 3]);
set1.add({x: 1, y: 2});
console.log(set1);

console.log(set1.has(1));
console.log(set1.has(3));

console.log(set1.delete(true)); //내부적인 결과 반환 => true false를 받아보기 위해선 console.log 필요
console.log(set1);
set1.delete(3); //결과 반환 없음
console.log(set1.delete(3)); //없는 것 없애도 오류가 나지 않음
console.log(set1);

//객체 생성과 동시에 프로퍼티 생성 -> size
console.log(set1.size);

//set prototype 메서드 keys, values, entries
console.log(set1.keys()); //key가 없기 때문에 value랑 같음.
console.log(set1.values()); 
console.log(set1.entries()); //[key,value] 짝으로 반환.

console.log(set1[1]); //index로서 접근 못함
const obj = {a:1};
console.log(obj[0]); //객체랑 같음
const tem = [1, 2, 3];
console.log(...set1); //console.log로서 보는 것 가능 괄호가 꼭 있어야 한다.

//이터러블 
for(itm of set1){
  console.log(itm);
}

set1.forEach(i => console.log(i+'foreach'));

const [a, b ,...rest] = set1;
console.log(rest); 
console.log(a);
console.log(b);

const arr = [1, 1, 3, 4, 5, 5, 6, 7, 7, 8, 9];
const only = [...new Set(arr)];
console.log(only);
console.log(new Set(arr));
console.log(new Set([1, 1, 3, 4, 5, 5, 6, 7, 7, 8, 9])); //배열로서 들어가는 게 아니라 묶어서 들어감
// console.log(new Set({x:1 , y:2}));
// const test1 = new Set({x: 1, y: 2}); //초기 값으로 객체가 들어 갈 수 없다.
// test1.add({x: 1, y: 2}); //add로는 가능
// console.log(test1);

const test2 = new Set();
console.log(test2.add([1, 2, 3]));
const test3 = new Set([1, 2, 3]);
console.log(test3);
