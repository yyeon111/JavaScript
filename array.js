// const argu = function() {
// console.log(arguments);
// console.log(typeof arguments);
// console.log(arguments instanceof Array);
// console.log(arguments instanceof Object);

// for(const i of arguments){
//   console.log(i);
// }
// }

// const test1 = argu(1, 2, 3, 4, 5);
// console.log(test1);


// const argument = function(param, ...params) {
//   console.log(params);
//   console.log(typeof params);
//   console.log(params instanceof Array);
//   console.log(params instanceof Object);
//   }
  
  // const test2 = argument(1, 2, 3, 4, 5);
  // console.log(test2);

  const argument = (param, ...params)  => {
    console.log(arguments);
    console.log(params);
    console.log(typeof params);
    console.log(params instanceof Array);
    console.log(params instanceof Object);
    }
    
    const test2 = argument(1, 2, 3, 4, 5);
    console.log(test2);
