// function func1 () {
//   throw new Error('에러');
// }

// function func2 () {
//   func1();
// }

// function func3 () {
//   func2();
// }

// function func4 () {
//   try {
//     func3();

//   } catch (e) {
//     console.error(e);
//   }
//   console.log('실행완료');
// }

// func4();

function func1 (e) { // 사원
  try {
    if (e) { throw e }
    console.log('저 가 봐도 되죠?');
    console.log('- - - - - - - - - -');

  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error('저 이건 알아요!', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('대리님, 이거 뭐에요?');
    throw e; // 💡 처리하지 못하는 에러는 윗선으로 던짐
  }
}

function func2 (e) { // 대리
  try {
    func1(e);
  } catch (e) {
    if (e instanceof TypeError) {
      console.error('내가 할 테니 가봐요.', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('부장님, 이건 제 선에서 안 되겠습니다.');
    throw e;
  }
}

function func3 (e) { // 부장
  try {
    func2(e);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.error('잘 하자, 응?', e);
      console.log('- - - - - - - - - -');
      return;
    }
    console.log('사장님, 이것 좀 보셔야겠습니다.');
    throw e;
  }
}

function func4 (e) { // 사장
  try {
    func3(e);

  } catch (e) {
    console.error('전원 집합.', e);
  }
}

// func4();
func4(new SyntaxError);
func4(new TypeError);
func4(new ReferenceError);
// func4(new RangeError);