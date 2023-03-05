//표준 내장객체중에 하나
//배열, string 이터러블
//배열과의 차이점 => 같은 값을 포함 할 수 없다.(걸러내단다).
//배열과 달리 순서가 의믹 앖다 -> ?
//set도 이터러블의 한 종류

const set1 = new Set(); //new를 통해 만듬
console.log(set1);
set1.add(1);
set1.add('A');
set1.add(true);
console.log(set1);
console.log(typeof set1); //object //배열처럼 인덱스가 붙어있지만 배열의 인덱스와는 다름
//펼치면 인덱스가 보임
//prototype = set

//기존에 포함된 값을 넣으면 추가되지 않음  //오류가 나지는 않음
set1.add(1);
set1.add(true);
console.log(set1);

//set값 생성 + 초기화 하는 방법 배열로 넣어주면 중복된 값을 제외하고 들어간다.
const set2 = new Set([1, 1, 1, 'A', true]);
console.log(set2);
console.log(typeof set2);

//특정 값이 들어 있는지 확인 has
console.log(
  set2.has(1),
  set2.has('A'),
  set2.has(4) //fasle
);

//제거 delete, 삭제 성공 여부 반환 -> 삭제 할 게 없으면 false
console.log(
  set2.delete('A'),
  set2.delete('true'),
  set2.delete(100)
);
console.log(set2);

//값을 복사하는 것이 아닌 같은 값을 바라보고 있다.
//결과를 반환하기 때문에 값을 저장해서 메서드 체이닝을 할 수 있다.

//요소의 갯수 -> size 프로퍼티
console.log(
  set2.size
);

//객체처럼 keys, values, entries로 접근 가능
//특이점 : key가 0...인덱스로 나오는 것이 아니라 valuses와 같은 것으로 나옴

console.log(set2);
const test = set2.keys();
const test2 = set2.values();
const test3 = set2.entries();
console.log(test, test2, test3); //Object정적 메서드랑 사용법이 다름

const arr = [1,2,3];
const test1 = Object.keys(arr);
console.log(test1);

set2.clear();
console.log(set2);

const objSet1 = new Set()
.add({x: 1, y: 2}) //참조하는 주소가 다르기 떄문에 담긴다.
.add({x: 1, y: 2})
.add([1, 2 ,3])
.add([1, 2, 3]);

console.log(objSet1);

//이터러블로서의 set
const arr1 = ['A', 'B', 'C', 'D'];
const set = new Set(arr1);
//for of
for(itm of set){
  console.log(itm)
};

//스프레드 문법 가능
const newArr = [...set]; //[A,B,C,D]
console.log(newArr);

const arr2 = [1, 1, 1, 2, 1, 3, 4, 5];
const arr3 = [...new Set(arr2)]; //배열의 중복을 제거하고 배열로 가져오기 (new Set을 통해서 중복 값을 제거하고, 펼쳐서 배열로 만듦)
console.log(arr3);

//디스트럭쳐링
const [x, y] = arr1;
console.log(x);
console.log(y);

const [a, b, ...rest] = set;
console.log(a);
console.log(b);
console.log(rest);

//이터러블과 별개로 forEach문도 사용 가능
//인자로 idx를 받았을 때 value와 같다 => 순서가 무의미함 
set.forEach((itm, idx, arr) => console.log(itm, idx, arr));