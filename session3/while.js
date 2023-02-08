//while for문에서 변수, 실행문이 밖 안으로 나눠진 구문
//무한 루프에 빠지지 않게 실행문을 잘 넣어 줄 것.
let x = 0;

while (x < 10) {
  console.log(x++); 
}

//if문과 continue, break이랑 쓰일 때 조건에 맞지 않으면 무한 루프를 돌기 때문에 변수에 한번 더 할당 해주면 가능하다.
// 1, 3, 5, 7을 의도한 코드. 그러나...
// // ⚠️ 무한루프! 왜일까요?
// let y = 0;
// while (y < 14) {
//   if (y % 2 === 0) continue;
//   if (y > 7) break;
//   console.log(y++); // continue에 걸려서 y++를 해주지 못한다.
// }

// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
let z = 0;
while (z < 14) {
  const toContinue = z % 2 === 0;  
  const toBreak = z > 7;
  const zNow = z++; //zNow의 값은 z+1이 된다.

  if (toContinue) continue; //1로 검사해서 continue에서 걸리지 않음 
  if (toBreak) break;

  console.log(zNow);  //continue에 걸리면 증가가 안되기 때문에 위에서 증가를 시켜주는 것이다.
}

// let a = 0;
// while (a < 14) {
//   const aNow = a++;

//   if (aNow % 2 === 0) continue;
//   if (aNow > 7) break;

//   console.log(aNow);
// }

// //do while
// //일단 실행하고 조건을 본다.
// let b = 12;

// do {
//   console.log(b++);
// } while (b < 10);