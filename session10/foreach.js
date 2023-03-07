const arr = [1, 2, 3];

arr.forEach(console.log);

const newSet = new Set(['a', 'b', 'c']);
newSet.forEach(console.log);

const players = [
  {name: 'a', age:10},
  {name: 'b', age:20},
  {name: 'c', age:30},
  {name: 'd', age:40},
];

function logTop3(first, second, third){
  console.log(`1등 ${first},2등 ${second}, 3등 ${third}`);
}

logTop3([...players].sort((a,b)=>b.age-a.age).map(({name})=>name)); //first에만 전달

console.log([...players].sort((a,b)=>b.age-a.age).map(({name})=>name));