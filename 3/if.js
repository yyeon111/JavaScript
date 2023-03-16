// const x = 22;

// if (x % 4) {
//   if (x % 2) {
//     console.log('홀수입니다.');
//   } else {
//     console.log('짝수입니다.');
//   }
// } else {
//   console.log('4의 배수입니다.');
// }

//if = else if

function evalNum () {
  const x = 21;

  if (x % 2) {
    console.log('홀수입니다.');
    return;
  }

  if (x % 4) {
    console.log('짝수입니다.');
    return;
  }
  console.log('4의 배수입니다.');
}

evalNum();
