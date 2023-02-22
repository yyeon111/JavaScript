// 중간의 빈 값도 채움
const arr1 = [1, 2, , , 4, 5];
const test = arr1.fill(7);


console.log(arr1, test);

arr1.unshift(8);

console.log(arr1,test);


// const arr2 = [1];
// const test2 = arr[]

const arr3 = [1, 2, 3];
const arr4 = Array.from(arr3);
arr4.push(4);

console.log(arr3, arr4);