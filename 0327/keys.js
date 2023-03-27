const obj = new Object();
const obj1 = {
  name: 'Nora',
  age:10
}

const result = Object.assign(obj, obj1);

console.log(Object.keys(result));
console.log(obj1);

obj1['shcool'] = 'A';
console.log(Object.keys(result));
console.log(obj1);