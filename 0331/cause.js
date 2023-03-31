// const error = new Error('👾 My error message 👾');

// console.log(error);

// const error1 = new Error(
//   '👾 My error message 👾', 
//   {cause: 'unknown'}
// );

// console.log(error1);
// console.log(error1.name);
// console.log(error1.message);
// console.log(error1.cause);

// error1.name = 'My first Error';
// console.log(error1);
// console.log(error1.toString());
// console.error(error1.toString());

// class A {
//   static name = 'A';
// }

// const test = new A();
// console.log(test);
// test.name = 'test';
// console.log(test);

// try {
//   (123).split('');
// } catch (e) {
//   e.name = '왁왁왁';
//   console.error('앞에 쓰는 것', e);
// }

//try..catch에서 error의 name지정
// try {
//   (123).split('');
// } catch (e) {
//   e.name = '이름';
//   e.message = '메시지';
//   console.error('표식', e);
// }

// const error = new Error('메세지');
// error.name = '이름';
// error.cause = '원인';
// error.왁왁왁 = '왁왁왁';
// error.감히너가이걸하겠다고접근한거니='꺼져라'
// console.error(error);

// const test = new Error('메세지', {cause: '원인'});
// test.name = '이름';
// console.error(test);
// console.dir(test);
// console.dir(error);

const error = new Error('message', {cause: 'unknown'});
error.name = 'name';
console.dir(error);

const error2 = new Error('message');
error2.cause = 'unknown';
error2.name = 'name';
console.dir(error2);