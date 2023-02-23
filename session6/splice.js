const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const test = arr.splice(2,2); //해당인덱스 포함 두개 삭제 =>   잘라진 것들이 들어감.
console.log(test);

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const test1 = arr1.splice(2,2,'a');//해당인덱스 포함 두개 삭제하고 a 추가
// console.log(arr1);

// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const test = arr1.fill('가',2,4); //해당 인덱스 포함 해당인덱스 전까지 바꿈
// console.log(test);

// console.log(arr1);

// const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const test2 = arr2.fill('나',2);
// console.log(arr2);