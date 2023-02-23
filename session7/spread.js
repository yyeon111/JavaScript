// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; //배열 내용을 펼쳐서 복사한다.
// arr2[0] = 3;

// console.log(arr1);
// console.log(arr2); //얕게 복사


//함수에서는 parameter명 직접 지정, 배열은 실제 변수명 사용
// const arr1 = ['B', 'C'];
// const arr2 = ['D'];
// const arr3 = ['E'];

// const arr4 = ['A', ...arr1, ...arr2, ...arr3, 'F'];
// console.log(arr4);

// const arr1 = [1,2,3,4,5];
// console.log(arr1);

//  // 배열 안에 있는 애들을 그대로 가져오는 것이기 때문에
// console.log(...arr1); // 스프레드는 단독으로 사용하지 못함. 괄호가 쓰이는 곳에 함께 사용해야됨
// console.log(
//   Math.max(...arr1),
//   Math.min(...arr1)
// );

// function classIntro(classNo, teacher, ...children){ //다시 배열로 생성
//   console.log(children); //배열로
//   console.log(...children); //펼쳐져서
//   return `${classNo}반의 선생님은 ${teacher},`
//   + `학생들은 ${children.join(', ')}입니다.`
// }

// const classNo = 3;
// const teacher = '김민지';
// const students = ['영희', '철수', '보라', '들준', '달숙'];

// console.log(
//   classIntro(classNo, teacher, ...students) //배열 펼쳐서 들어감
// );

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const toAdd = ['둘', '셋', '넷'];

// arr.splice(1,3,...toAdd);
// console.log(arr);

//concat보다 가독성 좋음
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);
// const arr4 = [...arr1, ...arr2];

// console.log(arr3, arr4);

//얕게복사
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr1===arr2); //false
// //안에있는 값을 가져올 뿐 배열 자체를 가져오는 것이 아니기 때문이다.

// // const arr3 = arr1;
// // console.log(arr1===arr3); //true

// arr1[0] = 0;
// console.log(arr1,arr2);

// const arr1 = [{x: 1},{x: 2}];
// const arr2 = [...arr1];
// console.log(arr2);

// arr1[0].x = 0;
// console.log(arr1, arr2);
// console.log(arr1===arr2);
// //원소 안에 있는 내부가 바뀔때에는 원본도 바뀜. 깊게 복사는 되지 않음.
// //하지만 false이다.

// //push, unshift 대신 사용 가독성 때문에
// let arr = [1, 2, 3];
// // arr = [...arr, 4];
// // console.log(arr); //뒤에 추가 가능 push

// arr = [0, ...arr];
// console.log(arr);

//원본배열 유지하고 일정부분만 연결해서 복사. splice 대체제
const orgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arr1 = [
//     ...orgArr.slice(0,3),
//     ...orgArr.slice(6,9) //slice도 얕게 되기 때문에.
// ];
// console.log(arr1);
// console.log(orgArr);

// 참고: 또 다른 방법
const arr2 = orgArr
.filter((_, i) => !(i >= 3 && i < 6));
console.log(arr2);

// const arr2 = orgArr
// .filter(i => !(i>=3 && i<6));
// console.log(arr2);
console.log(orgArr);