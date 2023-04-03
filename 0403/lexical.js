// const x = 1;
// const y = 1;
// const z = 1;

// function func1 () {
//   const y = 2;
//   const z = 2;

//   console.log('2', x, y, z);
//   func2();
// }

// function func2 () {
//   const z = 3;

//   console.log('3', x, y, z);
// } // 호출된 곳에서의 변수를 사용 하는 것이 아니라 외부 스코프의 변수를 사용 한다.



// console.log('1', x, y, z)
// func1();

const x = 1;
const y = 1;
const z = 1;

function func1 () {
  const y = 2;
  const z = 2;

  function func2 () {
    const z = 3;

    console.log('3', x, y, z);
  }

  console.log('2', x, y, z);
  func2();
}

console.log('1', x, y, z)
func1();