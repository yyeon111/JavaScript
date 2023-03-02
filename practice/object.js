// console.log(
//   new Object(),
//   new Object(null),
//   new Object(undefined)
// );

// //적합합 래퍼 함수로 알아서 생성됨
// console.log(
//   new Object(1),
//   new Object('ABC'),
//   new Object(true),
//   new Object([1, 2, 3])
// )

// //Object.assin 대상 객체에 인자 프로퍼티 복사
// const intro1 = {
//   name: '홍길동'
// };
// const intro2 = {...intro1};
// console.log(intro1, intro2);

// const personal = {
//   age: 25,
//   married: false
// };
// const career = {
//   job: '개발자',
//   position: '팀장'
// };

// Object.assign(intro1, personal);
// console.log(intro1);

// personal.age = 30;
// console.log(personal, intro1); //얇게 복사

// Object.assign(intro2, personal, career);
// console.log(intro2);

// const obj1 = new Object();
// const obj2 = {x: 1, y: 2};
// const obj3 = {y: 3}; //뒤에 오는 인자가 덮어쓴다.
// const obj4 = {z: {a: 1}};
// Object.assign(obj1, obj2, obj3, obj4);
// console.log(obj1);

// obj2.x = 0; //얕은 복사
// obj4.z.a = 2; // 깊은복사 안됨
// console.log(obj1);


// //keys, values, entries  객체의 키 값 키 값을 배열로 반환.
// const obj = {
//   x: 1,
//   y: 2,
//   z: 3
// };

// console.log(
//   Object.keys(obj)
// );
// console.log(
//   Object.values(obj)
// );
// console.log(
//   Object.entries(obj)
// );

// console.log(
//   Object.keys(globalThis)
//   .sort()
//   );

//   const arr = [1, 2, 3, 4, 5];

//   console.log(
//     Object.keys(arr),
//     Object.values(arr),
//     Object.entries(arr)
//   ); // 배열의 부모는 Object이기 때문에

//   const str = 'ABCDEFG';
//   console.log(
//     Object.keys(str),
//     Object.values(str),
//     Object.entries(str)
//   );

  //isExtesible //preventExtensions 확장인지 확인여부, 확장 막기
//   const obj = {x: 1, y:2};
//   console.log(Object.isExtensible(obj)); // true 확장가능
//   Object.preventExtensions(obj);
//   console.log(Object.isExtensible(obj)); //false로 변환

//   obj.x++;
//   delete obj.y
//   obj.z = 3;

//   console.log(obj); //추가만 안됨

// const arr = [1, 2];
// Object.preventExtensions(arr);
// arr[2] = 3;
// console.log(arr); // 배열도 안됨, 메서드 사용시 오류 발생
// arr.push(3);
// console.log(arr);

//isSealed 해당여부, seal 한단계 더 방지 추가 삭제 막기
// const obj = {x: 1, y: 2};
// console.log(Object.isSealed(obj)); //false => 안된 상태

// Object.seal(obj);
// console.log(Object.isSealed(obj));

// obj.x++;
// delete obj.y;
// obj.z = 3;
// console.log(obj);

//isFrozen 얼어있는지 여부, freeze 얼리다. 읽기만 가능 -> 추가 삭제 수정 불가능 
// const obj = {x: 1, y:2};
// console.log(Object.isFrozen(obj));

// Object.freeze(obj);
// console.log(Object.isFrozen(obj));
// obj.x++;
// delete obj.y;
// obj.z = 3;
// console.log(obj);

// const arr = [1];
// Object.freeze(arr);
// arr[0]++;
// arr[1] = 3;
// console.log(arr);// 대신 얕게만 가능 -> 깊게는 불가능

const obj = {
  x: 1,
  y: {a: 1}
};
Object.freeze(obj);

obj.x++;
obj.y.a++;

console.log(obj);

