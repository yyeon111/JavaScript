//set 배열처럼 여러가지를 담을 수 있는 주머니
//동일한 값을 여러번 포함할 수 없음
//값들의 순서가 무의미함
//new Set을 통해 새로운 객체를 생성할 수 있다.
const set1= new Set();
set1.add(1);
set1.add('A');
set1.add(true);

console.log(set1);

//배열처럼 보이지만 배열이 아니다. index로 접근 안됨
//이미 포함된 요소는 추가되지 않음.
//이미 있는거 추가한다고 오류도 나지 않는다.

//배열 인자를 넣으면 set생성, 초기화 할수 있다.
//중복 된 값이 있을 시 알아서 제거된다.
const set2 = new Set([1,1,1,'A',true]);
console.log(set2);


//특정한 값이 들어있는지 확인할 때 유용하다. has -> true, false로 반환
console.log(
  set2.has(1),
  set2.has('A'),
  set2.has(4),
);

//요소 제거와 성공 여부를 동시에 알 수 있다 delete -> true fasle로 반환

console.log(
  set2.delete('A'),
  set2.delete(true),
  set2.delete(100),
);

console.log(set2);

//set의 길이는 size로 알 수 있다.
console.log(set2.size);
//모든 요소들 삭제.
set2.clear();
console.log(set2);

//배열을 넣으면 이터러블로서 set을 사용 할 수 있다.
//for of문을 사용 할 수 있다.
//스프레드 문법이 가능하다.

const set3 = new Set(['a','b','c','d','e']);
for(s of set3){
  console.log(s);
};

const set = [...set3]; //스프레드문법
console.log(set);

//중복된 것을 빼고 스프레드로 만드는 방법
const arr1 = [1,1,1,2,2,3,4,4,5];
const arr2 = [...new Set(arr1)];
console.log(arr2);

set.forEach(console.log);