// let x = 0;
// while (x < 14) {
//   const toContinue = x % 2 === 0; //0  2  4
//   const toBreak = x > 7; // 0  2  4
//   const xNow = x++; // 0  2  4

//   if (toContinue) continue; //1  3  5
//   if (toBreak) break; // 1  3  5

//   console.log(xNow); // 1  3  5
// }


// //할당이 되거나, 직접적 사용이 될 때만 count x++
// let x = 0;
// while (x < 14) { //0 2 4
//   const xNow = x++; //0 2 4

//   if (xNow % 2 === 0) continue; //1 3 5
//   if (xNow > 7) break; //1 3 5

//   console.log(xNow); //1 3 5
// }

let x = 0;
do {
  console.log(x++);
} while (x < 10) ;