let obj = {'x':1, 'y':2};

const arr = [...obj];
for([key,value] of arr){
  console.log(key,value);
}