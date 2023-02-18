//전역객체 global object
//코드로 선언하지 않았지만 전역범위에 항상 존재하는 객체
//브라우저에서의 this === window === self === frames this를 통해 전역객체가 window인 것을 확인
//node.js 파일에서의 this는 전역객체를 가르키지 않음.
//REPL 의 node에서 this는 전역객체를 가르킴
//node.js에서 전역객체를 보기위해선 global 을 하면 볼 수 있다. global을 통해 전역객체가
// console.log(global);
// console.log(globalThis); //node 파일, 브라우저 둘다 먹히는 방법
//브라우저와 노드js의 전역객체가 다르다.

//원시값 프로퍼티, 메소드도 갖고있다, 배열처럼 접근
// console.log(globalThis); //전역객체
// console.log(globalThis.Infinity);
// console.log(Infinity);
// console.log(globalThis.NaN);
// console.log(undefined);
// console.log(Object);
//편의를 위해서 전역객체를 쓰지 않는다.
function func(){
  console.log('hi');
}
window.func();