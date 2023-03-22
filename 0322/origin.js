let num = 1;
let arry = [1, 2];

function test (a, b){ //복사되서 들어감
  a++;
  b[0]++;
  b[1]++;
  console.log(a, b); //원시값이 내에서는 변경됨.
}

test(num, arry);
console.log(num, arry); //실제로는 변경 안됨.


let tested = [1, 2, 3];

for(let i of tested) {
  i++;
  console.log(i);
}

console.log(tested);