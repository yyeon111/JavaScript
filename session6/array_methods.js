//built-in Array Static method isArray
//배열 여부 확인
console.log(
  Array.isArray([1,2,3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
);

const arrays = [
  [],[1,2,3], new Array(),
  Array.prototype //Array의 prototype기능들을 배열 형태로 보여줌 어쨌든 배열임.
];

const notArrays = [
  1,'abc',true,null,{}
];

for(const item of arrays){
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

for (const item of notArrays) {
  console.log(
    item,
    Array.isArray(item),
    item instanceof Array
  );
}

const arr = [
  '한놈','두시기','석삼','너구리','오징어'
];
console.log(
  arr.at(1),arr.at(2)
);
console.log(
  arr.at(-1),arr.at(-2)
);

const arr1 = [1,2,3,'abc',true];
console.log(
  arr1.includes(2),
  arr1.includes('abc'),
  arr1.includes(true)
);

console.log(
  arr1.includes(4),
  arr1.includes('가나다'),
  arr1.includes(false)
);

//참조형 데이터의 경우 
//값 자체가 포함되었는지 여부를 확인 할 수 없다.
//서로 다른 주소를 바라보고 있기 때문에 변수에 할당 하여 직접 비교해야한다.
const obj1 = {x:1, y:2};
const obj2 = {x:1, y:2};
const arr2 = [obj1, {x:3,y:4}];

console.log(
  arr2.includes(obj1), //true 
  arr2.includes(obj2), //false 메모리 주소가 다르다.
  arr2.includes({x:1, y:2}), //보기에 값만 같을 뿐 메모리 주소 자체가 없다.
  arr2.includes({x:3,y:4}) // arr2에 있는 객체와 별개의 데이터임. 메모리 주소 자체가 없다.
);

//indexOf, lastIndexOf 없을 시 -1반환
const arr3 = [1,2,3,2,1];
console.log(
  arr3.indexOf(2),
  arr3.lastIndexOf(2),
  arr3.indexOf(4)
);

//join 인자로 주어진 값으로 구분하여 문자열로 반환
const arr4 = ['a', 'b', 'c', 'd', 'e'];
const arr5 = [
  1, true, null, undefined, '가나다', { x: 0 }, [1, 2, 3]
];
const arr6 = ['a']
console.log(
  arr4.join() // 인자가 없다면 쉼표`,`로
);
console.log(
  arr4.join('')
);
console.log(
  arr4.join(' ')
);
console.log(
  arr5.join(':')
);

console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {
//스프레드는 배열로 들어가기 때문에 array method join을 사용해서 붙일 수 있다.
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}


