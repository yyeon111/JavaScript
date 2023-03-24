const num = [1, 2, 3, 4];
const result = [];
for(let i of num){
  result.push(i++);
}
console.log(result);

const temp = [];
function making (arr) {
  for (let i of arr) {
    temp.push(i++);
  }
  return temp;
}

const answer = making(num);