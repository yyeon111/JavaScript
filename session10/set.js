//표준 내장객체 
// Set 생성
const set1 = new Set(); //object

// add 메서드 - 요소 추가
set1.add(1);
set1.add('A');
set1.add(true);

console.log(set1);
console.log(set1[2]); //인덱스로 접근 불가능


const testString = 'hello';
console.log(testString[0]);

const set2 = new Set([1, 1, 1, 'A', true]); //Set에 넣을 요소들을 배열로 넣어준다.
console.log(set2); //{1, 'A', true}
// const set3 = new Set(1, 2, 3);
//Set instance method add
set2.add(false);
console.log(set2);
//Set instance method has
console.log(set2.has(false));
//Set instance method delete()
console.log(set2.delete(false));
console.log(set2);
//Set instance property
console.log(set2.size);
//Set instance method clear()
set2.clear();
console.log(set2);

const objStr = new Set()
// .add({x: 1, y: 2})
// // .add({x: 1, y: 2})
// // .add([1, 2, 3])
.add([1, 2, 3]); //add로 참조형 데이터를 넣으면 그대로 들어간다. 
//생성자 함수에서 배열로 넣으면 펼쳐져서 들어감.

console.log(objStr);

// const testobj = new Set({x: 1, y:2});
// console.log(testobj);

//iterable for of문
const arr = ['A', 'B', 'C', 'D', 'E'];
const set = new Set(arr); //펼쳐져서 들어옴

//배열로 바꾸거나 할 필요 없이 Set 자체가 for of문 가능하다.
for(itm of set){
  console.log(itm);
}

//sperad
const newArr = [...set];
console.log(newArr); //배열로서 다시 가져 올 수 있다.

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5]; //스프레드는 객체, 배열 안에 있는 것들을 다 가져 올 수 있기 때문에
const arr2 = [...new Set(arr1)];//[...{1, 2, 3, 4, 5}] => [1, 2, 3, 4, 5]

//forEach문 가능
set.forEach((itm, idx, setObj) => console.log(itm, idx, setObj));