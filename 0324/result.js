function getDeepFrozen(obj) {
  console.log(obj);

  const result = {};
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];

    result[name] = 
      (value && typeof value === 'object') ?
      getDeepFrozen(value) : value;
       
      // for (const i in result){
      //   console.log(i, result[i]);
      // }
      
  }
  for (const i in result){
    console.log(i, result[i]);
  // return Object.freeze(result);
}
}
let myObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}
// 💡 실행 뒤 바로 위의 출력 코드를 다시 실행해 볼 것
myObj = getDeepFrozen(myObj);
