const words = ['spray','limit','elite','exuberant','destruction','parsent'];

// function callback(element){
//   return element.length>6;
// }
// let result = words.filter(callback);
// console.log(result);

function myfilter(origin,callback){
  let answer = [];
  for(let i=0; i<origin.length; i++){
    if(callback(origin[i])){ //origin[i]가 callback함수의 입력값으로 전달된다. callback함수를 호출 할 때 필수로 입력값을 전달해 줘야한다.
      answer.push(origin[i]);
    }
  }
  return answer;
}

let result = myfilter(words,element => element.length>6);
console.log(result);