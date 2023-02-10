//중첩된 함수의 경우, 함수 밖에서 호출 한 것이 먼저 실행된다.
//scope별 변수를 사용 할 수 있다.
//블록안에 변수가 없으면 스코프 체인이 되는데, 여기서는 변수가 있다.
//함수에서 스코프는 따로 사용 할 수 있다.
function outer () {
  const name = '바깥쪽'
  console.log(name, '함수');

  function inner () {
    const name = '안쪽'
    console.log(name, '함수');
  }
  inner();
}

outer();

//재귀함수 recursive function
//자기자신 함수를 안에서 또 호출한다.
//함수를 호출하면 그 위치로 계속 가기 때문에 조건을 걸지 않으면 무한 루프에 빠질 수 있다.
function upto5 (x) {
  console.log(x);
  if (x < 5) {
    upto5(x + 1);
  } else {
    console.log('- - -');
  };
}

upto5(1); // 1-5 까지 찍힘
upto5(3); // 3-5 까지 찍힘
upto5(7); //7만 찍힘

//함수가 계속 호출되는 거기 때문에 stack overflow발생
