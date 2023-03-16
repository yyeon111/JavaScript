const month = 1;
let session = '';

switch (month) {
  case 1:
  case 2:
  case 3:
    session = '1분기';
    break;
  case 4:
  case 5:
  case 6:
    session = '2분기';
    break;
  case 7:
  case 8:
  case 9:
    session = '3분기';
    break;
  case 10:
  case 11:
  case 12:
    session = '4분기';
    break;
  default:
    session = '잘못된 월입니다.';
}

console.log(`${month}월의 분기는 ${session}입니다.`);

const direction = 'abcd';

const directionKor = {
  north: '북',
  south: '남',
  east: '동',
  west: '서'
}[direction] ?? '다시 입력하세요'

console.log(directionKor);

let a = 12;
const b = '십이';

a &&= b;
console.log(a);

a ??= b;
console.log(a);