//for문
//일반적인 for문에서는 i++가 계속 변하기 때문, let을 사용
//객체 안에서 key값으로 for문을 돌 수 있다.
//객체의 for문에서는 key값이 변하는게 아니라 추출하는 것이기 때문에 const를 사용한다.

const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
  console.log(key, ':', lunch[key])
}

//for in은 객체의 키에 접근
//for of는 배열의 각 요소에 접근 []자체가 요소가 된다.
// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}

//배열에서 for문보다 for of를 사용하면 안전하다. 변경사항을 신경 쓸 필요가 없고, 원본 데이가 변경되지 않는다.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // ⚠️ 복사된 값. let 사용 주목
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);

// for (let i = 0; i < numbers1.length; i++) {
//   numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
// }
// console.log(numbers1, numbers2);


//for문에서 조건을 쉼표로 중첩해서 사용 할 수 있다.
for (
  let x = true, y = 0, z = 0;
  y * z < 10;
  x = !x, x ? y++ : z++
) {
  console.log(y, z);
}

//for문에서 continue를 사용해서 한 루프를 건너 뛸 수가 있다.
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log('for 루프 종료');

//for문에서 break문을 만나면 바로 종료한다.
// const test = [1,2,3];
// for(const t of test){
//   if(t===3){
//     break;
//   }else{
//     console.log(t);
//   }
// }