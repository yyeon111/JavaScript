console.log('에러발생전');

try {
  (3).split('');
} catch (e) {
  // console.error('에러입니다', e); //에러네
  // console.log(e.name);
  // console.log(e.message);
  // console.log(e instanceof TypeError);
  // console.log(Object.getOwnPropertyNames(e));
  // console.log(e.stack);
  // console.log(Object.getOwnPropertyDescriptors(e));
  console.log(Object.getOwnPropertyDescriptors(e));
  console.log(e);
  console.log(Object.getOwnPropertyDescriptors(Error));
  console.log(Object.entries(e));
  console.log(e.name);
  console.dir(e); //Error < TypeError = 
}
console.log('에러 발생 후');

const test = new Error('이게뭘까');
console.log(test.name);
console.log(test.message);

// 두 번째 인자로 이유를 명시할 수도 있음
const error = new Error(
  '뭔가 잘못됐어',
  { cause: '뭘 잘못했으니까' }
);

console.error(error);
console.log(error.name);
console.log(error.message);

// cause를 입력했을 경우
console.log(error.cause);