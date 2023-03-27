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

function getDeepFrozen(obj) {
  console.log(obj); //c, d....// e, f... //g

  const result = {};
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const value = obj[name];

    result[name] = 
      (value && typeof value === 'object') ?
      getDeepFrozen(value) : value; // 1/ a.b / c.d / e.f // g
  }
  for (const i in result) {
    console.log('----------result-----------');
    console.log(i, result);
    }
  return Object.freeze(result);
}

// 💡 실행 뒤 바로 위의 출력 코드를 다시 실행해 볼 것
myObj = getDeepFrozen(myObj);