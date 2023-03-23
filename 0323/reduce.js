// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   arr.reduce((prev, curr, idx, arr) =>  {
    
//     return prev + curr}, 10)
// );

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.reduce((prev, curr, idx) => {
    console.log(`p: ${prev}, c: ${curr}, i: ${idx}`);
    return prev + curr;
  }, 10)
);