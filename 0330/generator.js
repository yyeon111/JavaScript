function* genFunction () {
  console.log('하나를 반환합니다.');
  yield '하나';

  console.log('둘을 반환합니다.');
  yield '둘';

  console.log('셋을 반환합니다.');
  yield '셋';
}

const genFunc = genFunction();

console.log(genFunc); //generator [Symbol.iterator], next()



  console.log(genFunc.next());
  console.log(genFunc.next());

  function* generator () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }

  let genObj = generator();

  console.log(genObj.next());
  console.log([...generator()]);
  for (const i of generator()) {
    console.log(i);
  }

  for(i = 1; i < 10; i++) {
    console.log(genObj.next());
  }
  