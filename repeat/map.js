// //일반 object에서는 참조형을 key값으로 설정 할 수 없음 => 보안 한 것 map

// // const map1 = new Map({x: 1},1);
// // console.log(map1); //바로 참조형 들어갈 수 없음


// // const map1 = new Map(1, {x: 1});
// // console.log(map1);

// const map1 = new Map();
// map1.set({x: 1},1);
// console.log(map1); //화살표로 표시

// //객체를 키값으로 사용 하기 위해서는 []를 해줘야 한다. 객체 자체로는 들어가지지 않음
// //변수에 넣어도 []를 해줘야함
// const tempObj = {x: 1};
// const test = { [tempObj]: 1};
// console.log(test);
// console.log(test[{x:1, y:2}]); //값 가지고 접근 할 때 아무거나 들어가도 다 접근이 가능 
// //변수일 때는 변수명이 맞아야 접근 가능하긴 함, 변수에 주소가 저장되어 있기 때문

// const map2 = new Map([['x',{x:1, y:2}], ['a',1], [{x:1, y:2},3]]); //키 들어갈 때는 ''사용
// console.log(map2);
// // const test2 = new Set(['x',1,{x:1, y:2}]); //여러개 들어갈 때 []로 여러개 인거 지정
// // console.log(test2);

// // const test3 = [1, 2, {x:1, y:2}];
// // console.log(test3);

// // const obj = [1, x, y];
// // console.log(obj); 배열의 특성에 따라 배열 안에서 키로 지정 할 때에는 ''를 써 줘야 하는 것이다.

// console.log(map2.has('3')); //키의 has
// console.log(map2.delete('x'));
// console.log(map2);
// console.log(map2.get('a')); //키에 접근 해서 value얻기
// console.log(map2.clear());

// const objKey = {x: 1, y:2};
// const arrKey = [1, 2, 3];

// const map3 = new Map();

// map3.set(objKey, 'objKey');
// map3.set(arrKey, 'arrKey');
// console.log(
//   map3.get(objKey),
//   map3.get(arrKey)
//   );

//   console.log(
//   map3.get({x: 1, y:2}),
//   map3.get([1, 2, 3])
//   );

//   console.log(map3);

//   const objKey1 = {x: 1, y:2};
//   const arrKey1 = [1, 2, 3];

//   const itm = {[objKey1]: 'objKey', [arrKey1]: 'arrKey'};
//   console.log(itm);
//   console.log(itm.objKey); //[]로 감싸진 키이기 때문에 대괄호로만 접근 가능
//   console.log(itm[objKey]); // 키가 보여지는게 objobj로 보이고 접근은 변수로서 가능하긴 하다.
//   //map는 변수로서 접근도 가능하고 보여지는 것도 가능 해서 가독성 좋음.
//   //어쨌든 둘다 변수가 아닌 참조값으로 넣으면 수정, 삭제가 불가능 하다. 각각 다른 주소가 들어가 있기 때문

//   map3.delete(objKey);
//   console.log(map3);

//   console.log(map3.keys()); //obj로 표현
//   console.log(map3.values()); //obj로 표현
//   console.log(map3.entries()); //Object.entries와 같이 배열로 묶어서 알려줌
// const newArr = [...map3.entries()];
// console.log(newArr);


//   const tempOb = {x: 1, y: 2};
//   console.log(Object.keys(tempOb)); //배열로
//   console.log(Object.values(tempObj));
//   console.log(Object.entries(tempObj));

const map4 = new Map([['x',1], ['y',2]]);

  for([key,value] of map4){ //key와 value로 구성 되어 있기 때문에 범위를 []로 설정 가능
    console.log(key,value); //key,value 배열로서 들어가기 때문에
  }
for(itm of map4){
  console.log(itm);
}


map4.forEach(console.log); //배열 안의 key의 value
map4.forEach((item, idx, set) => console.log(item, idx, set)); //itm -> vale, idx => key로 인식
map4.forEach(i => console.log(i));

// const arr = [1, 2, 3];
// for([key,value] of arr){
//   console.log(key,value);
// }
//키와 value가 없다 배열에선 안됨

// const testSet = new Set([1, 2, 3]);
// for([key,value] of testSet){
//   console.log(key,value);
// }

const test = {[{x:1, y:2}]: 2};
console.log(test);
const tempKey = {x:1, y:2};
const test1 = {tempKey: 2};
console.log(test1);
console.log(test1.tempKey);
console.log(test1[{x:1, y:2}]);