const obj = {'x': 1, 'y':2};
//객체 리터럴 끼리만 spread가능

// const result = [...obj];
// console.log(result);

const result = {...obj};
console.log(result);

// const orgResult = ...obj;
// console.log(orgResult);

const arr = [1, 2, 3];
console.log(...arr);
const arrToObj = {...arr};
console.log(arrToObj); //배열은 자유자제

const testMap = new Map([['a',1]]);
console.log(testMap);
const mapToArr = [...testMap];
console.log(mapToArr);
const orgMap = {...testMap};
console.log(orgMap);// map spread 배열로만 가능

const tempSet = new Set([1, 2, 3]);
const setToArr = [...tempSet];
console.log(setToArr);
const setToObj = {...tempSet};
console.log(setToObj);
// const orgSet = ...tempSet;